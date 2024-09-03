import { FC } from "react";
import coutCash from "../../assets/images/coutCash.svg";
import "./CoutCashBtn.pcss";

const CoutCashBtn: FC = () => {
	return (
		<div className="cout-cash">
			<button className="cout-cash-btn">
				<span className="cout-cash-text">Вывод средств</span>
				<img className="cout-cash-img" src={coutCash} alt="Cout Cash" />
			</button>
		</div>
	);
};

export { CoutCashBtn };
