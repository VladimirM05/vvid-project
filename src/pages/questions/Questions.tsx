import { FC, useEffect } from 'react';
import { About } from '../../components/About/About';
import { BackMainBtn2 } from '../../components/buttons/BackMainBtn2/BackMainBtn2';
import { QuestionsList } from '../../components/QuestionsList/QuestionsList';
import faqBackground from '../../assets/images/faq-background.jpg';

interface IQuestions {
	setBalance: React.Dispatch<React.SetStateAction<number>>;
	balance: number;
}

const Questions: FC<IQuestions> = ({ setBalance, balance }) => {
	useEffect(() => {
		document.title = 'Вопросы';
	}, []);

	return (
		<>
			<div
				className="wallpaper"
				style={{ backgroundImage: `url(${faqBackground})` }}
			></div>
			<BackMainBtn2 />
			<QuestionsList setBalance={setBalance} balance={balance} />
			<About />
		</>
	);
};

export default Questions;
