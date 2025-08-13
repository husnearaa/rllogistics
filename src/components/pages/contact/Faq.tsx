"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Faq() {
  // Updated FAQ data to match the image
  const demoFaqs = {
    data: [
      {
        _id: 1,
        question: "Bring their individual experience and creative",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus is eget ultrices many pretium sit amet facilisis. Augue eu vulputate tortor egestas cursus vivamus. that any Commodo iaculis eget massa phasellus ultrices nunc dignissim.",
      },
      {
        _id: 2,
        question: "Human centered design to challenges",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus is eget ultrices many pretium sit amet facilisis.",
      },
      {
        _id: 3,
        question: "Developing core web applications",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus is eget ultrices many pretium sit amet facilisis.",
      },
      {
        _id: 4,
        question: "Which technical skills would you improve?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus is eget ultrices many pretium sit amet facilisis.",
      },
      {
        _id: 5,
        question: "I'm a total beginner. Can I still follow along?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus is eget ultrices many pretium sit amet facilisis.",
      },
      {
        _id: 6,
        question: "How to divide a widget area section into columns?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus is eget ultrices many pretium sit amet facilisis.",
      },
      {
        _id: 7,
        question: "What options for logistics plans are available?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus is eget ultrices many pretium sit amet facilisis.",
      },
    ],
  };

  // State to track which FAQ is open - first one is open by default
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  // Toggle FAQ open/close
  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4 lg:mb-0">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-semibold text-[20px] tracking-wide uppercase">
              FAQ
            </span>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-[35px] lg:text-[60px] font-bold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {demoFaqs.data.map((faq) => (
            <div
              key={faq._id}
              className="bg-white border border-[#B3ADAD] rounded-lg overflow-hidden shadow-sm"
            >
              {/* Question Row */}
              <div
                className="flex justify-between items-center px-6 py-2 cursor-pointer bg-[#FFF6F6] hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(faq._id)}
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFaq === faq._id ? (
                    <div className="bg-red-500 rounded-full p-2 flex items-center justify-center w-8 h-8">
                      <FaMinus size={12} className="text-white" />
                    </div>
                  ) : (
                    <div className="border-[#B3ADAD] border rounded-full p-2 flex items-center justify-center w-8 h-8 hover:bg-gray-200 transition-colors">
                      <FaPlus size={12} className="text-gray-600" />
                    </div>
                  )}
                </div>
              </div>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === faq._id ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
