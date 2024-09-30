import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./BackMainBtn2.pcss";

const BackMainBtn2: FC = () => {
	return (
		<NavLink className='back-main-btn-2' to='/'>
			<span className='back-main-btn-text-2'>Вернуться</span>
		</NavLink>
	);
};

export { BackMainBtn2 };
