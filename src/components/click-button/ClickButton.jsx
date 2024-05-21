import "./clickButton.scss";
import RegButton from "../reg-button/RegButton";
import front from "../../app/images/front.png";
import back from "../../app/images/back.png";

export default function ClickButton() {
	const hideClickBtn = () => {
		const clickBtnElement = document.querySelector('.click-btn');
		const regBtnElement = document.querySelector('.reg');

		clickBtnElement.style.display = 'none';
		regBtnElement.style.display = 'flex';
	}
	
	return (
		<div className="section1">
			<div className="container">
				<div className="intro">
					<div className="btn-title">
						<h4 className="title-text">
							Какой-то вступительный текст, который я надеюсь кто-нибудь придумает. Кстати при нажатии на кнопку будет вылетать окно регистрации, а после регистрации перекидывать на страницу с играми и кликером. Также у меня заканчивается словарный запас и еще думаю никто не будет это читать... 
						</h4>
					</div>
					<RegButton />
					<div className="click-btn" onClick={hideClickBtn}>
						<h2 className="button-text" href="#">
							Click Me
						</h2>
						<img src={front} alt="" className="btn-img-front" />
						<img src={back} alt="" className="btn-img-back" />
					</div>
				</div>	
			</div>
		</div>
	);
}
