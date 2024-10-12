import React, {
	FC,
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';
import Cookies from 'js-cookie';
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

interface IStates {
	userSignIn: boolean;
	balance: number;
}

const Main: FC<IMain> = ({ userSignIn, setUserSignIn, setBalance, balance }) => {


	useEffect(() => {
		document.title = 'Главная';

		const storedData = Cookies.get('Cookie');
		if (storedData) {
			try {
				const states: IStates = JSON.parse(storedData);
				setBalance(states.balance);
				console.log(states.userSignIn);
				setUserSignIn(states.userSignIn);
				console.log(states.userSignIn);
			} catch (error) {
				console.error('Ошибка при парсинге cookie:', error);
			}
		}
	}, []);

	useEffect(() => {
		console.log(userSignIn);
		const states: IStates = {
			userSignIn: userSignIn,
			balance: balance,
		};
		console.log(userSignIn);

		Cookies.set('Cookie', JSON.stringify(states), {
			path: '/',
			expires: 365 * 24 * 60 * 60,
			sameSite: 'strict',
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

export default Main;
