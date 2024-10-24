import { FC, useState, Suspense, useEffect, SetStateAction } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Main } from '@/pages/main';
import { Games } from '@/pages/games';
import { Questions } from '@/pages/questions';
import { Registration } from '@/pages/registration';
import '@/assets/styles/global.pcss';

export const App: FC = () => {
	// Проверка пользователя на авторизацию
	const [userSignIn, setUserSignIn] = useState<boolean>(true);
	// Баланс пользователя
	const [balance, setBalance] = useState<number>(44440);
	// console.log(__PLATFORM__, __ENV__);

	useEffect(() => {
		const connectWallet = async () => {
			if (window.ethereum) {
				try {
					const accounts = await window.ethereum.request({
						method: 'eth_requestAccounts',
					});

					const response = axios.put(
						`http://localhost:8000/api/update_user/${accounts[0]}`,
						{
							balance: balance,
						},
						{
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
				} catch (error) {
					console.error('Ошибка подключения: ', error);
				}
			} else {
				alert('Установите MetaMask!');
			}
		};
	}, [balance]);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback="Loading...">
							<Main
								userSignIn={userSignIn}
								setUserSignIn={setUserSignIn}
								setBalance={setBalance}
								balance={balance}
							/>
						</Suspense>
					}
				/>
				<Route
					path="/games"
					element={
						<Suspense fallback="Loading...">
							<Games />
						</Suspense>
					}
				/>
				<Route
					path="/questions"
					element={
						<Suspense fallback="Loading...">
							<Questions />
						</Suspense>
					}
				/>
				<Route
					path="/registration"
					element={
						<Suspense fallback="Loading...">
							<Registration
								userSignIn={userSignIn}
								setUserSignIn={setUserSignIn}
							/>
						</Suspense>
					}
				/>
				<Route path="*" />
			</Routes>
		</Router>
	);
};
