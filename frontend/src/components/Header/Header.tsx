import { FC, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TopPlayersSideBar } from '../TopPlayersSideBar/TopPlayersSideBar';
import { CoutCashBtn } from '../CoutCashBtn/CoutCashBtn';
import logo from '@/assets/images/logo.png';
import dollar from '../../assets/images/dollar.svg';
import list from '../../assets/images/list.svg';
import signIn from '../../assets/images/signIn.svg';
import { BalanceContext } from '../../pages/main/Main';
import './Header.pcss';

const Header: FC = () => {
	// Передача данных из Main с помощью хука useContext
	const context = useContext(BalanceContext);
	// Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
	if (!context) {
		throw new Error('Header must be used within a BalanceProvider');
	}
	const { balance, userSignIn } = context;

	const [isVisible, setIsVisible] = useState<string>('');
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const toggleVisibility = (visible: string): void => {
		if (isVisible) {
			setIsAnimating(true);
			setTimeout(() => {
				setIsVisible('');
				setIsAnimating(false);
			}, 300);
		} else {
			setIsVisible(visible);
		}
	};

	return (
		<>
			<header className="header">
				<div className="header-inner">
					{userSignIn && (
						<div className="user-info">
							<CoutCashBtn />
							<button
								className="user-info-btn"
								onClick={() => toggleVisibility('profile')}
							>
								<img className="user-info-img" src={dollar} alt="User" />
								<span className="user-info-text">{balance}</span>
							</button>
							<button
								className="user-info-btn user-info-btn-2"
								onClick={() => toggleVisibility('profile')}
							>
								<img
									className="user-info-img user-info-img-2"
									src={list}
									alt="User"
								/>
								<span className="user-info-text">Profile</span>
							</button>
						</div>
					)}
					{!userSignIn && (
						<NavLink className="reg-btn" to="Registration">
							<img className="reg-img" src={signIn} alt="Reg Button Icon" />
							<span className="reg-text">Sign In</span>
						</NavLink>
					)}
					<div className="logo">
						<img className="logo-img" src={logo} alt="SIGMARULES" />
					</div>
					{userSignIn && (
						<ul className="menu-list">
							<NavLink className="menu-item" to="/Games">
								<span className="menu-link">Мини-игры</span>
							</NavLink>
							<NavLink className="menu-item" to="/Questions">
								<span className="menu-link">FAQ</span>
							</NavLink>
							<li
								className="menu-item"
								onClick={() => toggleVisibility('players')}
							>
								<span className="menu-link">Топ игроки</span>
							</li>
							<li
								className="menu-item"
								onClick={() => toggleVisibility('missions')}
							>
								<span className="menu-link">Миссии</span>
							</li>
						</ul>
					)}
				</div>
			</header>
			{isVisible && (
				<TopPlayersSideBar
					isVisible={isVisible}
					toggleVisibility={toggleVisibility}
					isAnimating={isAnimating}
				/>
			)}
		</>
	);
};

export { Header };
