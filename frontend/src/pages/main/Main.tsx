import React, {
	FC,
	useEffect,
	Dispatch,
	SetStateAction,
} from 'react';
import { ClickBtn } from '../../components/ClickBtn/ClickBtn';
import { Header } from '../../components/Header/Header';
import { ScrollToTop } from '../../utilities/ScrollToTop';
import background from '../../assets/images/background.jpg';

interface IBalanceContext {
	balance: number;
	setBalance: Dispatch<SetStateAction<number>>;
	userSignIn: boolean;
	setUserSignIn: Dispatch<SetStateAction<boolean>>;
}

export const BalanceContext = React.createContext<IBalanceContext | null>(null);

interface IMain {
	setUserSignIn: Dispatch<SetStateAction<boolean>>;
	userSignIn: boolean;
	setBalance:  Dispatch<SetStateAction<number>>;
	balance: number;
}

const Main: FC<IMain> = ({ userSignIn, setUserSignIn, setBalance, balance }) => {
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

export default Main;
