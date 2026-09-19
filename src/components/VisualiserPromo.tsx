import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisualiserPromo: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.9, ease: [0.2, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[50px] bg-brand-dark p-6 sm:p-10 md:p-12 lg:p-16"
        >
          {/* decorative blobs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full glass border border-white/10 text-brand-secondary font-display text-[10px] uppercase tracking-[0.3em] mb-5 sm:mb-6">
                <Sparkles size={12} /> Free AI Preview
              </span>
              <h3 className="heading-editorial text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-6 break-words leading-[1.05]">
                See your new driveway <br className="hidden sm:block" />
                <span className="italic text-brand-accent">before we build it.</span>
              </h3>
              <p className="text-white/60 font-sans text-base sm:text-lg max-w-md mb-7 sm:mb-8">
                Upload a photo of your home and we'll show you the finished result in about
                30 seconds — free, no sign-up.
              </p>
              <Link
                to="/design-visualiser"
                className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-white hover:text-brand-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-display font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-lg w-full sm:w-auto"
              >
                Try The Visualiser <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual preview collage */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm lg:max-w-none mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-[20px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/10">
                <img
                  src="/images/patio_before_messy.png"
                  alt="Before landscaping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-[20px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/10 mt-8 sm:mt-10">
                <img
                  src="/images/retaining_wall_modern_1778526590652.png"
                  alt="After landscaping"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
