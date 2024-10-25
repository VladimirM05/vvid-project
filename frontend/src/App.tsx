import { FC, useState, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Main } from '@/pages/main';
import { Games } from '@/pages/games';
import { Questions } from '@/pages/questions';
import { Registration } from '@/pages/registration';
import '@/assets/styles/global.pcss';

export const App: FC = () => {
	// Проверка пользователя на авторизацию
	const [userSignIn, setUserSignIn] = useState<boolean>(false);
	// Баланс пользователя
	const [balance, setBalance] = useState<number>(0);
	// Никнейм пользователя
	const [nickname, setNickname] = useState<string | null>(null);
	// Аватар пользователя в формате Base64
	const [avatar, setAvatar] = useState<string | null>(null);
	// Адрес MetaMask пользователя
	const [walletAddress, setWalletAddress] = useState<string | null>(null);

	useEffect(() => {
		const connectWallet = async () => {
			if (window.ethereum) {
				try {
					const accounts = await window.ethereum.request({
						method: 'eth_requestAccounts',
					});
					if (accounts && accounts.length > 0) {
						const wallet = accounts[0];
						setWalletAddress(wallet);  // Сохраняем адрес кошелька в состояние
					}
				} catch (error) {
					console.error('Ошибка подключения или получения данных пользователя: ', error);
				}
			} else {
				alert('Установите MetaMask!');
			}
		};

		// Вызов функции для получения данных пользователя
		connectWallet();
	}, []);

	// Получение данных пользователя, только если walletAddress установлен
	useEffect(() => {
		const fetchUserData = async () => {
			if (walletAddress) {
				try {
					// Запрашиваем данные пользователя
					const response = await axios.get(
						`http://localhost:8000/api/get_user/${walletAddress}`
					);
					
					// Обновляем состояние с данными пользователя
					const { balance, nickname, image_base64 } = response.data;
					setBalance(balance || 0);
					setNickname(nickname || 'Без имени');
					setAvatar(image_base64 || null);

					console.log('Данные пользователя получены:', response.data);
				} catch (error) {
					console.error('Ошибка при получении данных пользователя: ', error);
				}
			}
		};

		// Вызываем функцию только когда walletAddress установлен
		if (walletAddress) {
			fetchUserData();
		}
	}, [walletAddress]);

	// useEffect для обновления данных пользователя при изменении баланса
	useEffect(() => {
		const updateUserBalance = async () => {
			if (walletAddress && balance > 0) {  // Проверяем, что баланс больше 0
				try {
					// Запрос на сервер для обновления баланса
					const response = await axios.put(
						`http://localhost:8000/api/update_user/${walletAddress}`,
						{
							balance: balance,
						},
						{
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
					console.log('Данные обновлены:', response.data);
				} catch (error) {
					console.error('Ошибка обновления данных пользователя: ', error);
				}
			}
		};
	
		// Вызов функции обновления только при наличии адреса кошелька и баланса
		if (walletAddress && balance > 0) {
			updateUserBalance();
		}
	}, [balance, walletAddress]);  // Триггер при изменении баланса или адреса кошелька
	


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
								walletAddress={walletAddress}
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
