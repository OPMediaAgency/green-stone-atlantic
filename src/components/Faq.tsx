import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do you offer free landscaping estimates?',
    answer:
      'Yes. We provide free, no-obligation estimates for all landscaping, lawn care, and outdoor improvement projects.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve Halifax, Dartmouth, Bedford, Sackville, and surrounding communities throughout Halifax Regional Municipality (HRM).',
  },
  {
    question: 'What landscaping services do you offer?',
    answer:
      'Our services include lawn mowing, garden cleanup, lawn fertilization, weed control, paver patio installation, and seasonal property maintenance.',
  },
  {
    question: 'Do you offer one-time services or ongoing maintenance plans?',
    answer:
      'We offer both one-time services and recurring maintenance plans to keep your property looking its best year-round.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Simply contact us for a free estimate. We'll discuss your needs, assess your property, and recommend the best solution for your outdoor space.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-12 px-6 bg-[#f7f4ef] text-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="md:text-5xl text-3xl  font-extrabold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50"
                >
                  <span className="text-xl font-medium">{item.question}</span>
                  <span
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`px-5 overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
                >
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
