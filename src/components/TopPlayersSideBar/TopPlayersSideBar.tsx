import { FC, useContext } from "react";
import { createPortal } from "react-dom";
import { BalanceContext } from "../../pages/Main";
import { UserData } from "../UserData/UserData";
import { UserData2 } from "../UserData2/UserData2";
import { CoutCashBtn } from "../CoutCashBtn/CoutCashBtn";
import profile from "../../assets/images/gandonioCat.png";
import "./TopPlayersSideBar.pcss";

interface ITopPlayersSideBar {
	isVisible: string;
	toggleVisibility: (isVisible: string) => void;
	isAnimating: boolean;
}

const TopPlayersSideBar: FC<ITopPlayersSideBar> = ({
	isVisible,
	toggleVisibility,
	isAnimating,
}) => {
	// Передача данных из Main с помощью хука useContext
	const context = useContext(BalanceContext);
	// Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
	if (!context) {
		throw new Error("Header must be used within a BalanceProvider");
	}
	const { balance } = context;

	return createPortal(
		<div
			className={
				isAnimating
					? "user-aside-container user-aside-container-hide"
					: "user-aside-container"
			}
		>
			<div className="screen-filter" onClick={() => toggleVisibility("")}></div>
			<aside
				className={isAnimating ? "user-aside user-aside-hide" : "user-aside"}
			>
				<div className="user-aside-inner">
					{isVisible === "players" && (
						<h4 className="user-aside-title">Топ Игроки</h4>
					)}
					{isVisible === "missions" && (
						<h4 className="user-aside-title">Миссии</h4>
					)}
					{isVisible === "profile" && (
						<div className="user-profile">
							<div className="user-profile-avatar">
								<img
									className="user-profile-avatar-img"
									src={profile}
									alt="User Icon"
								/>
							</div>
							<div className="user-profile-container">
								<UserData text="Mail" value="" />
								<UserData text="MetaMask address" value="" />
							</div>
							<UserData2 text="Рейтинг" value={null} />
							<UserData2 text="Заработано токенов" value={balance} />
							<CoutCashBtn />
						</div>
					)}
				</div>
			</aside>
		</div>,
		document.querySelector("body") as HTMLElement
	);
};

export { TopPlayersSideBar };
