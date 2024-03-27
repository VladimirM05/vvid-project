import "./clickButton.scss";
import front from "../../app/images/front.png";
import back from "../../app/images/back.png";

export default function ClickButton() {
	return (
		<div className="section1">
			<div className="container">
				<div className="button-title">
					<h4 className="title-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed odio labore corrupti laborum doloribus ipsum praesentium. Corrupti adipisci vel laudantium consequatur rerum sapiente, sequi excepturi porro aspernatur ipsa delectus.
						Quod doloremque eaque atque amet fugit voluptatibus enim, incidunt quis saepe in at iure veniam esse iste blanditiis voluptas ipsum nesciunt voluptate, voluptatum corrupti, molestias molestiae perferendis? Laudantium, itaque? Vitae?
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
