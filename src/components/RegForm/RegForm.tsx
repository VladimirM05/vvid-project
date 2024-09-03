import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { MetaMaskBtn } from "../MetaMaskBtn/MetaMaskBtn";
import regFormTitle from "../../assets/images/reg-form-title.jpg";
import "./RegForm.pcss";

const RegForm: FC = () => {
	const [account, setAccount] = useState("");

	const connectWallet = async () => {
		if (window.ethereum) {
			try {
				// Запрос разрешения доступа к аккаунту
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				setAccount(accounts[0]); // Устанавливаем текущий аккаунт
			} catch (error) {
				console.error("Ошибка подключения: ", error);
			}
		} else {
			alert("Установите MetaMask!");
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

				<div className="reg-form-input-outline">
					<input
						className="reg-form-input"
						type="text"
						placeholder="NICKNAME"
					/>
				</div>
				<MetaMaskBtn onClick={connectWallet} />
			</form>
		</div>
	);
};

export { RegForm };
