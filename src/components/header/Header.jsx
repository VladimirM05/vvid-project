import "./header.scss";
import { NavLink } from "react-router-dom";
import person from "../../app/images/person.svg";
import Profile from "../profile/Profile";
import Logo from "../logo/Logo";

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
					<Logo />
					<ul className="menu__list">
						<li className="menu__item">
							<NavLink className="menu__link" to="/">
								Главная
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink className="menu__link" to="/Games">
								Игры
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink className="menu__link" to="/Market">
								Маркет
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink className="menu__link" to="/Rating">
								Рейтинг
							</NavLink>
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
	