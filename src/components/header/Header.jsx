import "./header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import Profile from "../profile/Profile";
import person from "../../app/images/person.webp";

export default function Header() {
	const handleClick = () => {
		const userElement = document.querySelector('.profile');
	
		if (userElement.classList.contains('disp')) {
			userElement.classList.remove('disp');
			userElement.style.animation = 'user-profile ease-out .2s';
		}
		else {
			userElement.classList.add('disp');
			userElement.style.animation = 'user-profile-reverse ease-out .2s';
		}
	}
	
	return (
		<header className="header">
			<div className="header-inner">
				<div className="header-box">
					<Logo />
					<ul className="menu-list">
						<li className="menu-item">
							<NavLink className="menu-link" to="/">
								<span>Г</span>лавная
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className="menu-link" to="/Games">
								<span>И</span>гры
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className="menu-link" to="/Market">
								<span>М</span>аркет
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className="menu-link" to="/Rating">
								<span>Р</span>ейтинг
							</NavLink>
						</li>
					</ul>
					<div className="user">
						<img className="user-profile" src={person} onClick={handleClick} alt="Profile icon"></img>
						<button className="user-login">Login</button>
					</div>
				</div>
			</div>
			<Profile />
		</header>
	);
}
	