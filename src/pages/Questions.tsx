import { FC, useEffect } from "react";
import { About } from "../components/About/About";
import { BackMainBtn2 } from "../components/buttons/BackMainBtn2/BackMainBtn2";
import { QuestionsList } from "../components/QuestionsList/QuestionsList";

const Questions: FC = () => {
	useEffect(() => {
		document.title = "Вопросы";
	}, []);

	return (
		<>
			<BackMainBtn2 />
			<QuestionsList />
			<About />
		</>
	);
};

export { Questions };
