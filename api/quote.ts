import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const esc = (v: unknown): string => {
  if (v == null) return "N/A";
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const data = (req.body ?? {}) as Record<string, unknown>;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error("Missing Gmail credentials in environment variables.");
    return res.status(500).json({
      success: false,
      message: "Server configuration error: Missing mail credentials.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const fullName = esc(data.fullName) || "Unknown Name";
    const serviceId = esc(data.serviceId) || "General Inquiry";

    const mailOptions = {
      from: { name: "Green Stone Atlantic", address: gmailUser },
      to: ["md.sirforce@gmail.com", "wpnajmul@gmail.com"],
      subject: `New Lead: ${fullName} - ${serviceId}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #8b735b; padding-bottom: 10px;">New Landscaping Inquiry</h2>
          <p><strong>Name:</strong> ${esc(data.fullName)}</p>
          <p><strong>Email:</strong> ${esc(data.email)}</p>
          <p><strong>Phone:</strong> ${esc(data.phone)}</p>
          <p><strong>Service:</strong> ${esc(data.serviceId)}</p>
          <p><strong>Address:</strong> ${esc(data.address)}</p>
          <p><strong>Preferred Date:</strong> ${esc(data.preferredDate)}</p>
          <p><strong>Budget:</strong> ${esc(data.budgetRange)}</p>
          <h3 style="color: #1a1a1a;">Project Description</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${esc(data.description) || "No description provided."}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This lead was submitted via the Green Stone Atlantic website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to recipients");

    return res.status(200).json({ success: true, message: "Lead sent successfully via Gmail" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Nodemailer Error:", message);
    return res.status(500).json({
      success: false,
      error: "Failed to send email via Gmail",
      details: message,
    });
  }
}