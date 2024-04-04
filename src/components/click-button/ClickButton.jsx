import "./clickButton.scss";
import front from "../../app/images/front.png";
import back from "../../app/images/back.png";

export default function ClickButton() {
	return (
		<div className="section1">
			<div className="container">
				<div className="button-title">
					<h4 className="title-text">
						Какой-то вступительный текст, который я надеюсь кто-нибудь придумает. Кстати при нажатии на кнопку будет вылетать окно регистрации, а после регистрации перекидывать на страницу с играми и кликером. Также у меня заканчивается словарный запас и еще думаю никто не будет это читать... 
					</h4>
				</div>
				<div className="click-button">
					<h2 className="button-text" href="#">
						Click Me
					</h2>
					<img src={front} alt="" className="button-img-front" />
					<img src={back} alt="" className="button-img-back" />
				</div>
			</div>
		</div>
	);
}
