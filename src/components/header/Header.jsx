import "./header.scss";
import person from "../../app/images/person.svg";
import Profile from "../profile/Profile";

export default function Header() {
	const handleClick = () => {
		const userElement = document.querySelector('.profile');
	
		if (userElement.classList.contains('disp')) {
				userElement.classList.remove('disp');
				userElement.style.animation = 'user-profile ease-out .25s';
		}
		else {
				userElement.classList.add('disp');
				userElement.style.animation = 'user-profile-reverse ease-out .25s';
		}
	}
	
	return (
		<header className="header">
			<div className="header__inner">
				<div className="header__box">
					<a className="logo" href="!#">
						Σigma
					</a>
					<ul className="menu__list">
						<li className="menu__item">
							<a className="menu__link" href="!#">
								Главная
							</a>
						</li>
						<li className="menu__item">
							<a className="menu__link" href="!#">
								Игры
							</a>
						</li>
						<li className="menu__item">
							<a className="menu__link" href="!#">
								Маркет
							</a>
						</li>
						<li className="menu__item">
							<a className="menu__link" href="!#">
								Рейтинг
							</a>
						</li>
					</ul>
					<div className="user">
						<img className="user__profile" src={person} onClick={handleClick} alt="user-icon"></img>
						<button className="user__login" onClick={handleClick}>Login</button>
					</div>
				</div>
			</div>
			<Profile />
		</header>
	);
}
	