import { FC, useEffect } from 'react';
import { About } from '../../components/About/About';
import { BackMainBtn2 } from '../../components/buttons/BackMainBtn2/BackMainBtn2';
import { QuestionsList } from '../../components/QuestionsList/QuestionsList';
import faqBackground from '../../assets/images/faq-background.jpg';

const Questions: FC = ({}) => {

	return (
		<>
			<div
				className="wallpaper"
				style={{ backgroundImage: `url(${faqBackground})` }}
			></div>
			<BackMainBtn2 />
			<QuestionsList />
			<About />
		</>
	);
};

export default Questions;
