import { FC, useContext, useState } from "react";
import coutCash from "../../assets/images/coutCash.svg";
import "./CoutCashBtn.pcss";
import Popup from "../PopupForPay/PopupDisplay";
import { BalanceContext } from "@/pages/main/Main";
import { ethers } from "ethers";

const CoutCashBtn: FC = () => {
    // Передача данных из Main с помощью хука useContext
    const context = useContext(BalanceContext);
    // Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
    if (!context) {
        throw new Error('Header must be used within a BalanceProvider');
    }
    const { balance, setBalance } = context;

    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [amount, setAmount] = useState<string>("");
    const [isConfirmButtonVisible, setIsConfirmButtonVisible] = useState<boolean>(false);

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
        if (Number(value) >= 100 && balance >= Number(value)) {
            setIsConfirmButtonVisible(true);
        } else {
            setIsConfirmButtonVisible(false);
        }
    };

    const handleConfirm = async (): Promise<void> => {
        togglePopupVisibility();
        setBalance(prevBalance => prevBalance - Number(amount));
        try {
            const provider = new ethers.JsonRpcProvider("https://rpc-amoy.polygon.technology/");
            const contractAddress = "0xd188fc743Fb42Fb9Dcd4a32dF5C9dbB335e97f6D";
            const abi = [
                "function withdrawTokens(uint256 amount, address recipient)"
            ];

            const walletPrivateKey = "c3f3d60c45ab61b4be313da6479a98e2a401a2d45c56697174423d2b20b60e63";
            const wallet = new ethers.Wallet(walletPrivateKey, provider);
            const contract = new ethers.Contract(contractAddress, abi, wallet);

            const decimals = 3;
            const amountInTokens = ethers.parseUnits(amount.toString(), decimals);
            const recipientAddress = "0x27a82aB8362280ae1d79909F47B53839289E3998";

            const tx = await contract.withdrawTokens(amountInTokens, recipientAddress);
            console.log("Transaction sent:", tx.hash);

            await tx.wait();
            console.log("Transaction confirmed:", tx.hash);
        } catch (err) {
            console.error("Error withdrawing tokens:", err);
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
                            <label htmlFor="amount">Минимальная сумма вывода: 10000</label>
                            {isConfirmButtonVisible && (
                                <button onClick={handleConfirm}>Подтвердить</button>
                            )}
                        </div>
                    }
                    handleClose={togglePopupVisibility}
                />
            )}
        </>
    );
};

export { CoutCashBtn };