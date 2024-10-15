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
    <div className="faq-page">
      <h1 className="faq-title">FAQ</h1>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleExpand(index)}>
              <strong>{item.question}</strong>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer">
                <p>{item.answer.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
                {item.imageUrl && <img src={item.imageUrl} alt="FAQ" />}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export {QuestionsList};