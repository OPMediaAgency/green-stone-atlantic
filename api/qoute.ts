import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const data = req.body;

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  // 2. Validate environment variables safely
  if (!gmailUser || !gmailPass) {
    console.error("Missing Gmail credentials in environment variables.");
    return res.status(500).json({
      success: false,
      message: "Server configuration error: Missing mail credentials.",
    });
  }

  try {
    // 3. Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: {
        name: "Green Stone Atlantic",
        address: gmailUser,
      },
      to: ["md.sirforce@gmail.com", "wpnajmul@gmail.com"],
      subject: `New Lead: ${data.fullName || "Unknown Name"} - ${data.serviceId || "General Inquiry"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #8b735b; padding-bottom: 10px;">New Landscaping Inquiry</h2>
          <p><strong>Name:</strong> ${data.fullName || "N/A"}</p>
          <p><strong>Email:</strong> ${data.email || "N/A"}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Service:</strong> ${data.serviceId || "N/A"}</p>
          <p><strong>Address:</strong> ${data.address || "N/A"}</p>
          <p><strong>Preferred Date:</strong> ${data.preferredDate || "N/A"}</p>
          <p><strong>Budget:</strong> ${data.budgetRange || "N/A"}</p>
          <h3 style="color: #1a1a1a;">Project Description</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${data.description || "No description provided."}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This lead was submitted via the Green Stone Atlantic website.</p>
        </div>
      `,
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to recipients");

    return res.status(200).json({ success: true, message: "Lead sent successfully via Gmail" });
  } catch (error: any) {
    console.error("Nodemailer Error:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Failed to send email via Gmail",
      details: error.message 
    });
  }
}