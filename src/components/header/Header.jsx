import "./header.scss";
import person from "../../app/images/person.svg";
import Profile from "../profile/Profile";

export default function Header() {
	return (
		<header className="header">
			<div className="header__inner">
				<div className="header__box">
					<a className="logo" href="#">
						Σigma
					</a>
					<ul className="menu__list">
						<li className="menu__item">
							<a className="menu__link" href="#">
								Main
							</a>
						</li>
						<li className="menu__item">
							<a className="menu__link" href="#">
								Clicker
							</a>
						</li>
						<li className="menu__item">
							<a className="menu__link" href="#">
								Market
							</a>
						</li>
						<li className="menu__item">
							<a className="menu__link" href="#">
								Rating
							</a>
						</li>
					</ul>
					<div className="user">
						<img className="user__profile" src={person}></img>
						<button className="user__login">Login</button>
					</div>
				</div>
				<Profile />
			</div>
		</header>
	);
}
	