import "./regButton.scss";
import MetaMask from "../../app/images/MetaMask.svg.webp";
import { useMetaMask } from "metamask-react";

export default function RegButton() {
	const regChangeOver = () => {
		const regBtnElement = document.querySelector('.reg-inner');
		const regBtnParent= document.querySelector('.reg');

		regBtnElement.style.transform = 'rotateX(15deg)';
		regBtnElement.style.boxShadow = '0 3px 6px rgba(#121216, 0.36)';
		regBtnElement.style.transition = '.3s ease';
		regBtnParent.style.perspective = '1500px'
	}

	const regChangeOut = () => {
		const regBtnElement = document.querySelector('.reg-inner');

		regBtnElement.style.transform = 'rotateX(0deg)';
		regBtnElement.style.boxShadow = '0 3px 6px rgba(#121216, 0.36)';
	}

	const { connect } = useMetaMask();

	return (
		<button className="reg" onClick={connect} onMouseOver={regChangeOver} onMouseOut={regChangeOut}>
			<div className="reg-inner">
				<p className="reg-text">
					Войти с помощью
				</p>
				<div className="reg-logo">
					<img className="reg-logo-img" src={MetaMask} alt="Metamask logo"  />
					<h4 className="reg-logo-title">
						MetaMask
					</h4>
				</div>
			</div>
		</button>
	);
}