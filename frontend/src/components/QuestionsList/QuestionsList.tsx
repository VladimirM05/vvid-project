import React, { useState } from "react";
import "./QuestionsList.pcss";
import { faqItems } from "../../store/questArrey";

const QuestionsList: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="faq-page">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleExpand(index)}>
              <b>{item.question}</b>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer">
                <p>{item.answer.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}</span>
                ))}</p>
                {item.imageUrl && <img src={item.imageUrl} alt="FAQ" />}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export {QuestionsList};