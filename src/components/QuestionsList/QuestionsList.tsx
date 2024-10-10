import { FC, Dispatch, SetStateAction, useEffect } from "react";
import "./QuestionsList.pcss";

interface IQuestionsList {
	setBalance:  React.Dispatch<React.SetStateAction<number>>;
	balance: number;
}

const QuestionsList: FC<IQuestionsList> = ({setBalance, balance}) => {
	useEffect(() => {
		console.log(balance)
	}, [balance])
	
	return (
		<section className='questions'>
			<div className='questions-inner'></div>
		</section>
	);
};

export { QuestionsList };
