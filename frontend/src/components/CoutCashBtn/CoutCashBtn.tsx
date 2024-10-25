import { FC, useContext, useState } from "react";
import coutCash from "../../assets/images/coutCash.svg";
import "./CoutCashBtn.pcss";
import Popup from "../PopupForPay/PopupDisplay";
import { BalanceContext, UserContext } from "@/pages/main/Main";
import { ethers } from "ethers";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CheckmarkSVG = () => (
    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
);

const CoutCashBtn: FC = () => {
    // Передача данных из Main с помощью хука useContext
    const context = useContext(BalanceContext);
    // Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
    if (!context) {
        throw new Error('Header must be used within a BalanceProvider');
    }

	const { balance, setBalance, walletAddress } = context;

    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [amount, setAmount] = useState<string>("");
    const [isConfirmButtonVisible, setIsConfirmButtonVisible] = useState<boolean>(false);
    const [isOperationSuccess, setIsOperationSuccess] = useState<boolean>(false);
    const [operationMessage, setOperationMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const togglePopupVisibility = (): void => {
        setIsPopupVisible(!isPopupVisible);
        if (!isPopupVisible) {
            setIsConfirmButtonVisible(false);
            setAmount(""); 
        }
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setAmount(value);
        if (Number(value) >= 1000 && balance >= Number(value)) {
            setIsConfirmButtonVisible(true);
        } else {
            setIsConfirmButtonVisible(false);
        }
    };

    const handleConfirm = async (): Promise<void> => {
        togglePopupVisibility();
        setBalance(prevBalance => prevBalance - Number(amount));
        setIsLoading(true);

        try {
            const provider = new ethers.JsonRpcProvider("https://rpc-amoy.polygon.technology/");
            const contractAddress = "0x394Fbd932B28a1d7828138aD480bbCA791F126D6";
            const abi = [
                "function withdrawTokens(uint256 amount, address recipient)"
            ];

            const walletPrivateKey = "c3f3d60c45ab61b4be313da6479a98e2a401a2d45c56697174423d2b20b60e63";
            const wallet = new ethers.Wallet(walletPrivateKey, provider);
            const contract = new ethers.Contract(contractAddress, abi, wallet);

            const decimals = 3;
            const amountInTokens = ethers.parseUnits(amount.toString(), decimals);
            const recipientAddress = walletAddress;

            const tx = await contract.withdrawTokens(amountInTokens, recipientAddress);
            console.log("Transaction sent:", tx.hash);

            await tx.wait();
            console.log("Transaction confirmed:", tx.hash);

            setIsOperationSuccess(true);
            setOperationMessage("Операция прошла успешно");
        } catch (err) {
            console.error("Error withdrawing tokens:", err);
            setOperationMessage("Ошибка при выполнении операции");
        } finally {
            setIsLoading(false);
            setTimeout(() => {
                setIsOperationSuccess(false);
                setOperationMessage("");
            }, 2000);
        }
    };

    return (
        <>
            <div className="cout-cash">
                <button className="cout-cash-btn" onClick={togglePopupVisibility}>
                    <span className="cout-cash-text">Вывод средств</span>
                    <img className="cout-cash-img" src={coutCash} alt="Cout Cash" />
                </button>
            </div>
            {isPopupVisible && (
                <Popup
                    content={
                        <div className="popup-content">
                            <label htmlFor="amount">Сколько средств хотите вывести?</label>
                            <input
                                id="amount"
                                type="number"
                                value={amount}
                                onChange={handleAmountChange}
                                placeholder="Введите сумму"
                            />
                            <label htmlFor="amount">Минимальная сумма вывода: 1000</label>
                            {isConfirmButtonVisible && (
                                <button onClick={handleConfirm}>Подтвердить</button>
                            )}
                        </div>
                    }
                    handleClose={togglePopupVisibility}
                />
            )}
            <TransitionGroup>
                {isLoading && (
                    <CSSTransition
                        key="loading"
                        timeout={300}
                        classNames="fade"
                    >
                        <div className="loading-overlay">
                            <div className="loading-spinner"></div>
                        </div>
                    </CSSTransition>
                )}
                {isOperationSuccess && (
                    <CSSTransition
                        key="success"
                        timeout={300}
                        classNames="fade"
                    >
                        <div className="operation-success">
                            {operationMessage}
                            <CheckmarkSVG />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    );
};

export { CoutCashBtn };