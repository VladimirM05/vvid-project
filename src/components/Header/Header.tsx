import { FC, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { TopPlayersSideBar } from "../TopPlayersSideBar/TopPlayersSideBar";
import dollar from "../../assets/images/dollar.svg";
import list from "../../assets/images/list.svg";
import signIn from "../../assets/images/signIn.svg";
import { BalanceContext } from "../../pages/Main";
import "./Header.pcss";

const Header: FC = () => {
	// Передача данных из Main с помощью хука useContext
	const context = useContext(BalanceContext);
	// Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
	if (!context) {
		throw new Error("Header must be used within a BalanceProvider");
	}
	const { balance, userSignIn } = context;

	const [isVisible, setIsVisible] = useState<string>("");
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const toggleVisibility = (visible: string): void => {
		if (isVisible) {
			setIsAnimating(true);
			setTimeout(() => {
				setIsVisible("");
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
						<ul className="menu-list">
							<li className="menu-item">
								<NavLink className="menu-link" to="/Games">
									Мини-игры
								</NavLink>
							</li>
							<li className="menu-item">
								<NavLink className="menu-link" to="/Questions">
									FAQ
								</NavLink>
							</li>
							<li className="menu-item">
								<span
									className="menu-link"
									onClick={() => toggleVisibility("players")}
								>
									Топ игроки
								</span>
							</li>
							<li className="menu-item">
								<span
									className="menu-link"
									onClick={() => toggleVisibility("missions")}
								>
									Миссии
								</span>
							</li>
						</ul>
					)}
					<div
						className="logo"
						style={
							userSignIn
								? {
										display: "absolute",
										left: "50%",
										transform: "translateX(-50%)",
								  }
								: { display: "block" }
						}
					>
						<span className="logo-text">Sigma Rule</span>
					</div>
					{userSignIn && (
						<div className="user-info">
							<button
								className="user-info-btn"
								onClick={() => toggleVisibility("profile")}
							>
								<img className="user-info-img" src={dollar} alt="User" />
								<span className="user-info-text">{balance}</span>
							</button>
							<button
								className="user-info-btn user-info-btn-2"
								onClick={() => toggleVisibility("profile")}
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
						<div className="reg-btn">
							<img className="reg-img" src={signIn} alt="Reg Button Icon" />
							<span className="reg-text">Sign In</span>
						</div>
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
