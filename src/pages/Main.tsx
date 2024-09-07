import React, { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ClickBtn } from "../components/ClickBtn/ClickBtn";
import { Header } from "../components/Header/Header";
import { ScrollToTop } from "../utilities/ScrollToTop";
import background from "../assets/images/background.jpg";

interface IBalanceContext {
	balance: number;
	setBalance: React.Dispatch<React.SetStateAction<number>>;
	userSignIn: boolean;
	setUserSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BalanceContext = React.createContext<IBalanceContext | null>(null);

interface IMain {
	userSignIn: boolean;
	setUserSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: FC<IMain> = ({ userSignIn, setUserSignIn }) => {
	// Баланс пользователя
	const [balance, setBalance] = useState<number>(0);

	useEffect(() => {
		document.title = "Главная";

		const storedClickCount = Cookies.get("balance");
		if (storedClickCount) {
			setBalance(parseInt(storedClickCount, 10));
		}
	}, []);

	useEffect(() => {
		Cookies.set("balance", balance, {
			path: "/",
			expires: 365 * 24 * 60 * 60,
			sameSite: "strict",
		});
	}, [balance]);

	return (
		<BalanceContext.Provider
			value={{ balance, setBalance, userSignIn, setUserSignIn }}
		>
			<div
				className="wallpaper"
				style={{ backgroundImage: `url(${background})` }}
			></div>
			<Header />
			<main className="main">
				<ScrollToTop />
				<ClickBtn />
			</main>
		</BalanceContext.Provider>
	);
};

export { Main };
