import "./regForm.scss";
import cross from "../../app/images/cross.svg"

export default function RegForm() {
	return (
		<div className="section0">
			<div className="reg">
				<div className="reg-btn">
					<div className="reg-exit">
						<img className="reg-exit-img" src={cross} alt="exitImg" />
					</div>
				</div>
				<div className="reg-box-inner">
					<h4 className="reg-title">Регистрация</h4>
					<form className="form" action="!#">
						<div className="form-item">
							<input className="form-input" type="name" />
							<label className="form-text"  htmlFor="!#">Имя</label>
							<img className="form-img" src="" alt="inputIcon" />
						</div>
						<div className="form-item">
							<input className="form-input" type="email" />
							<label className="form-text"  htmlFor="!#">Почта</label>
							<img className="form-img" src="" alt="inputIcon" />
						</div>
						<div className="form-item">
							<input className="form-input" type="password" />
							<label className="form-text"  htmlFor="!#">Пароль</label>
							<img className="form-img" src="" alt="inputIcon" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}