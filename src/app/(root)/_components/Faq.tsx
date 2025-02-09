"use client";
import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { faqs } from "@/data";

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="border-y border-gray-800 bg-[#0B0E14]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about FlexiCodeStudio. Can't find the
            answer you're looking for? Reach out to our support team.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
