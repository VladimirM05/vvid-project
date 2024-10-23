import React, { useState } from 'react';
import './QuestionsList.pcss';
import { faqItems } from '../../store/questArrey';

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
		<section className="faq">
			<h2 className="faq-title">FAQ</h2>
			<ul className="faq-list">
				{faqItems.map((e, i) => (
					<li key={i} className="faq-item">
						<span className="faq-question" onClick={() => toggleExpand(i)}>
							{e.question}
						</span>
						{expandedIndex === i && (
							<div className="faq-answer">
								<p className="faq-answer-text" key={i}>
									{e.answer}
								</p>
								{e.imageUrl && <img src={e.imageUrl} alt="FAQ" />}
							</div>
						)}
					</li>
				))}
			</ul>
		</section>
	);
};

export { QuestionsList };
