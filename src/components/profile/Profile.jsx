import "./profile.scss";
import avatar from "../../app/images/avatar.png";
import exit from "../../app/images/exit.svg";

export default function Profile() {
	return (
		<div className="profile disp">
			<div className="profile-inner">
				<div className="user">
					<img className="user-img" src={avatar} alt="" />
					<button className="user-btn">
						Изменить
					</button>
				</div>	
				<div className="user-data">
					<div className="user-names">
						<h4 className="user-name">
							Vladimir
						</h4>
						<h4 className="user-surname">
							Malakhov
						</h4>
					</div>	
					<p className="user-mail">
						vmala@sfedu.ru
					</p>
					<p className="user-balance">
						4500
					</p>
				</div>
				<div className="user-exit">
						<img src={exit} alt="" />
					</div>	
			</div>
		</div>
	);
}
