import { FC } from "react";
import { NavLink } from "react-router-dom";
import arrowBack from "../../../assets/images/arrowBack.png";
import "./BackMainBtn.pcss";

const BackMainBtn: FC = () => {
	return (
		<NavLink className='back-main-btn' to='/'>
			<span className='back-main-btn-text'>Кликер</span>
			<img
				className='back-main-btn-img'
				src={arrowBack}
				alt='Arrow Back Icon'
			/>
		</NavLink>
	);
};

export { BackMainBtn };
