import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MetaMaskBtn } from "../MetaMaskBtn/MetaMaskBtn";
import regFormTitle from "../../assets/images/reg-form-title.jpg";
import "./RegForm.pcss";
import axios from "axios";

interface IRegForm {
  userSignIn: boolean;
  setUserSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegForm: FC<IRegForm> = ({ userSignIn, setUserSignIn }) => {
  const [account, setAccount] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value); // Обновляем состояние при изменении ввода
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // предотвращает отправку формы
  };

  const navigate = useNavigate();

  const connectWallet = async () => {
    if (isLoading) return;

    setIsLoading(true);
    if (window.ethereum) {
      try {
        // Запрос разрешения доступа к аккаунту
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]); // Устанавливаем текущий аккаунт
        console.log(accounts);
        setUserSignIn((prevState) => !prevState);
        
        const response = await axios.post(
          "http://localhost:8000/api/post_user",
          {
            "wallet_address": accounts[0],
            "nickname": inputValue,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
		navigate("/");
      } catch (error) {
        console.error("Ошибка подключения: ", error);
      }
    } else {
      alert("Установите MetaMask!");
    }
  };

  return (
    <div className="reg-form-container">
      <form className="reg-form" onSubmit={handleSubmit}>
        <NavLink className="reg-form-link" to="/">
          <img className="reg-form-title" src={regFormTitle} alt="Registration Form Title" />
        </NavLink>

        <div className="reg-form-input-outline">
          <input value={inputValue} onChange={handleInputChange}  className="reg-form-input" type="text" placeholder="NICKNAME" />
        </div>
        <MetaMaskBtn onClick={connectWallet} disabled={isLoading} />
      </form>
    </div>
  );
};

export { RegForm };
