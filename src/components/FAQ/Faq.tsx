// src/components/FaqSection.tsx
import React, { useState } from "react";
import "./Faq.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    question: "How do I track my order?",
    answer:
      "After placing an order, you will receive a tracking number via email.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Yes, you can change or cancel your order within 24 hours of placing it.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Yes, you can change or cancel your order within 24 hours of placing it.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Yes, you can change or cancel your order within 24 hours of placing it.",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleIndex(index)}>
                {item.question}
                <span className="dropdown-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
