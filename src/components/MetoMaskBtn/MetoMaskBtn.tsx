import { FC } from "react";
import metamask from "../../assets/images/metamask.svg";
import "./MetaMaskBtn.pcss";

interface IMetaMaskBtn {
	onClick: () => void;
}

const MetaMaskBtn: FC<IMetaMaskBtn> = ({ onClick }) => {
	return (
		<button className="metamask-btn" onClick={onClick} disabled={false}>
			<span className="metamask-text">
				LOG IN WITH
				<br />
				METAMASK
			</span>
			<img className="metamask-img" src={metamask} alt="Metamask Logo" />
		</button>
	);
};

export { MetaMaskBtn };
