import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera, ImagePlus, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const VISUALISER_URL = 'https://greenstone-outdoors1.vercel.app/widget';

// Open the visualiser in a popup-styled new window. Falls back to a new tab
// if the browser blocks the popup. Tracks the window so we can close it on demand.
let popupWindow: Window | null = null;
function openVisualiserPopup() {
  const isSmall = window.innerWidth < 768;
  if (isSmall) {
    // Phones: open as a new tab (most predictable mobile UX)
    window.open(VISUALISER_URL, '_blank', 'noopener,noreferrer');
    return;
  }
  const width = Math.min(window.screen.width - 80, 1280);
  const height = Math.min(window.screen.height - 80, 900);
  const left = Math.max(0, Math.round((window.screen.width - width) / 2));
  const top = Math.max(0, Math.round((window.screen.height - height) / 2));

  const features = [
    `width=${width}`,
    `height=${height}`,
    `left=${left}`,
    `top=${top}`,
    'resizable=yes',
    'scrollbars=yes',
    'toolbar=no',
    'menubar=no',
    'location=yes',
    'status=no',
  ].join(',');

  popupWindow = window.open(VISUALISER_URL, 'gs-visualiser', features);

  // If the popup was blocked, fall back to a new tab
  if (!popupWindow || popupWindow.closed) {
    const a = document.createElement('a');
    a.href = VISUALISER_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function closeVisualiserPopup() {
  if (popupWindow && !popupWindow.closed) popupWindow.close();
  popupWindow = null;
}

const RevealHeader: React.FC<{ subtitle: string; title: string; light?: boolean }> = ({ subtitle, title, light }) => (
  <div className="flex flex-col mb-8 md:mb-16">
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      className={light
        ? "text-brand-secondary/60 font-display font-medium tracking-[0.4em] uppercase text-[10px] mb-3 md:mb-4"
        : "text-brand-accent/60 font-display font-medium tracking-[0.4em] uppercase text-[10px] mb-3 md:mb-4"}
    >
      {subtitle}
    </motion.span>
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className={light
          ? "heading-editorial text-4xl sm:text-5xl md:text-[6vw] text-white"
          : "heading-editorial text-4xl sm:text-5xl md:text-[6vw] text-brand-dark"}
      >
        {title}
      </motion.h2>
    </div>
  </div>
);

export const DesignVisualiser: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // Clean up the spawned popup window when leaving the page
  useEffect(() => {
    return () => closeVisualiserPopup();
  }, []);

  return (
    <div className="grain-overlay">
      <SEO
        title="Free Landscape Design Visualiser | Green Stone Atlantic"
        description="Upload a photo of your home and see your new driveway, patio, or landscaping in about 30 seconds. Free AI design preview from Green Stone Atlantic."
      />

      {/* Visualiser */}
      <section className="pt-56 sm:pt-48 md:pt-52 pb-16 sm:pb-20 md:pb-32 bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <RevealHeader
            subtitle="Try It Now"
            title="Design Visualiser"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-brand-secondary/10 shadow-2xl bg-brand-light p-6 sm:p-8 md:p-12 lg:p-16"
          >
            {/* decorative */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-white border border-brand-secondary/10 text-brand-accent font-display text-[10px] uppercase tracking-[0.3em] mb-4 sm:mb-5">
                  <Camera size={12} /> Upload a Photo
                </span>
                <h3 className="heading-editorial text-brand-dark text-3xl sm:text-4xl md:text-5xl mb-4 break-words">
                  Add the property photo
                </h3>
                <p className="text-gray-500 font-sans text-base max-w-xl mb-6 sm:mb-8">
                  Drag a photo here, or click to choose one. On your phone this opens the
                  camera so you can shoot the driveway right from the client's curb.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={openVisualiserPopup}
                    className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-dark text-white px-6 py-3.5 rounded-full font-display font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-lg w-full sm:w-auto justify-center"
                  >
                    Launch Visualiser <ArrowRight size={14} />
                  </button>
                </div>
                <p className="text-gray-400 font-sans text-xs mt-5 max-w-md">
                  <span className="font-bold uppercase tracking-widest text-brand-accent">Best results:</span>{' '}
                  stand back, get the whole area in frame, shoot in daylight.
                </p>
              </div>

              {/* Visual preview card */}
              <div className="hidden md:flex flex-col gap-4 w-56 lg:w-64 shrink-0">
                <div className="aspect-[4/5] rounded-[24px] lg:rounded-[28px] overflow-hidden border border-brand-secondary/10 shadow-xl">
                  <img
                    src="/images/patio_before_messy.png"
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-[24px] lg:rounded-[28px] overflow-hidden border border-brand-secondary/10 shadow-xl -mt-12 ml-12 relative">
                  <img
                    src="/images/retaining_wall_modern_1778526590652.png"
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              {
                icon: ImagePlus,
                title: 'Add the property photo',
                desc: "Drag a photo here, or click to choose one. On your phone this opens the camera so you can shoot the driveway right from the client's curb.",
              },
              {
                icon: Camera,
                title: 'Stand back & frame it',
                desc: 'Best results: step back far enough to capture the whole area, and make sure the full space is in shot.',
              },
              {
                icon: Sun,
                title: 'Shoot in daylight',
                desc: 'Natural light gives the visualiser the clearest view of your property for the most accurate result.',
              },
            ].map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-brand-light border border-brand-secondary/10 hover:border-brand-secondary/30 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-5">
                  <tip.icon size={22} />
                </div>
                <h4 className="font-display font-bold text-brand-dark text-base sm:text-lg uppercase tracking-tight mb-2">
                  {tip.title}
                </h4>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-brand-dark">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-secondary font-display font-medium tracking-[0.4em] uppercase text-[10px] mb-4 block"
            >
              Like What You See?
            </motion.span>
            <h2 className="heading-editorial text-white text-3xl sm:text-4xl md:text-6xl mb-6 break-words">
              Let's build it <span className="italic text-brand-accent">for real</span>.
            </h2>
            <p className="text-white/60 text-base sm:text-lg font-sans max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
              Your preview is just the start. Tell us about your project and we'll send back a proper estimate
              from our team in Halifax.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-white text-white hover:text-brand-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-display font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-lg w-full sm:w-auto justify-center"
            >
              Request My Estimate <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
