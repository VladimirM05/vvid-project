import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MetaMaskBtn } from '../MetaMaskBtn/MetaMaskBtn';
import regFormTitle from '../../assets/images/reg-form-title.jpg';
import './RegForm.pcss';

interface IRegForm {
	userSignIn: boolean;
	setUserSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegForm: FC<IRegForm> = ({ userSignIn, setUserSignIn }) => {
	const [account, setAccount] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
	// 	e.preventDefault(); // предотвращает отправку формы
	// };
	const navigate = useNavigate();

	const connectWallet = async () => {
		if (isLoading) return;

		setIsLoading(true);
		if (window.ethereum) {
			try {
				// Запрос разрешения доступа к аккаунту
				const accounts = await window.ethereum.request({
					method: 'eth_requestAccounts',
				});
				setAccount(accounts[0]); // Устанавливаем текущий аккаунт
				setUserSignIn(true);
				navigate('/');

				const response = await axios.post(
					'http://localhost:8000/api/new_user',
					{
						wallet_address: accounts[0],
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

	return (
		<div className="reg-form-container">
			<form className="reg-form">
				<NavLink className="reg-form-link" to="/">
					<img
						className="reg-form-title"
						src={regFormTitle}
						alt="Registration Form Title"
					/>
				</NavLink>
				<MetaMaskBtn onClick={connectWallet} disabled={isLoading} />
			</form>
		</div>
	);
};

export { RegForm };