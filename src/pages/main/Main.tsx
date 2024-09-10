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
	userSignIn: boolean;
	setUserSignIn: Dispatch<SetStateAction<boolean>>;
}

interface IStates {
	userSignIn: boolean;
	balance: number;
}

const Main: FC<IMain> = ({ userSignIn, setUserSignIn }) => {
	// Баланс пользователя
	const [balance, setBalance] = useState<number>(0);

	useEffect(() => {
		document.title = 'Главная';
		console.log(balance, userSignIn);

		const storedData = Cookies.get('Cookie');
		if (storedData) {
			try {
				const states: IStates = JSON.parse(storedData);
				setBalance(states.balance);
				setUserSignIn(states.userSignIn);
			} catch (error) {
				console.error('Ошибка при парсинге cookie:', error);
			}
		}
		console.log(balance, userSignIn);
	}, []);

	useEffect(() => {
		console.log(balance, userSignIn);
		const states: IStates = {
			userSignIn: userSignIn,
			balance: balance,
		};

		Cookies.set('Cookie', JSON.stringify(states), {
			path: '/',
			expires: 365 * 24 * 60 * 60,
			sameSite: 'strict',
		});
		console.log(balance, userSignIn);
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
