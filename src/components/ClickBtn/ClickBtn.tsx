import { FC, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IBlock } from "../../interfaces/IBlock";
import { BalanceContext } from "../../pages/Main";
import { blocksArray } from "../../store/blocksArray";
import "./ClickBtn.pcss";

// Генератор рандомных чисел
const getRandNum = (min: number, max: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// Родительский блок
let blockParent: IBlock[] = Object.assign(
	{},
	blocksArray[getRandNum(0, blocksArray.length - 1)]
);

// Счетчик степени разрушения блока
let blockCount: number = 0;

// Дочерний блок
let block2: IBlock = Object.assign({}, blockParent[blockCount]);

// Координаты мыши относительно родителя
let mouseX: number = 0;
let mouseY: number = 0;

const ClickBtn: FC = () => {
	const [showSignInBtn, setShowSignInBtn] = useState<boolean>(false);

	// Передача данных из Main с помощью хука useContext
	const context = useContext(BalanceContext);
	// Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
	if (!context) {
		throw new Error("Header must be used within a BalanceProvider");
	}
	const { balance, setBalance, userSignIn } = context;

	// Функция, срабатывающая при нажатии на кнопку
	const setDataBlock = (): void => {
		block2.endurance--;

		// Отрисовывает элемент
		const clickBtn = document.querySelector<HTMLDivElement>(".click-btn");
		clickBtn?.insertAdjacentHTML(
			"beforeend",
			`<span class="balance-add" style="top:${mouseY}px; left:${mouseX}px">${
				block2.endurance === 0 &&
				blockCount === Object.keys(blockParent).length - 1
					? blockParent[blockCount].cost >= 0
						? "+" + blockParent[blockCount].cost
						: blockParent[blockCount].cost
					: "+1"
			}
		</span>`
		);

		const lastchild = clickBtn?.lastChild as HTMLSpanElement;
		const prevMouseY: number = mouseY;
		let top: number = 0;
		const start: number = Date.now();
		const timer: NodeJS.Timer = setInterval((): void => {
			const timePassed: number = Date.now() - start;
			top += 3;
			lastchild.style.top = prevMouseY - top + "px";

			if (timePassed >= 300) {
				lastchild.style.opacity = "0";
			}

			if (timePassed >= 1000) {
				clearInterval(timer);
			}
		}, 15);

		setBalance(prevBalance => prevBalance + 1);
		// Условие, которое изменяет степень разрушения блока
		if (
			block2.endurance === 0 &&
			blockCount !== Object.keys(blockParent).length - 1
		) {
			blockCount++;
			block2 = Object.assign({}, blockParent[blockCount]);
		}

		// Условие, которое меняет блок на следующий
		if (
			block2.endurance === 0 &&
			blockCount === Object.keys(blockParent).length - 1
		) {
			// Перестраховка на случай отрицательного баланса
			if (balance < 10 && block2.cost < 0) {
				setBalance(0);
			} else {
				setBalance(balance + block2.cost + 1);
			}

			blockParent = Object.assign(
				{},
				blocksArray[getRandNum(0, blocksArray.length - 1)]
			);
			blockCount = 0;
			block2 = Object.assign({}, blockParent[blockCount]);
		}
	};

	// Отслеживание координат мыши
	const onMouseMove = (e: React.MouseEvent): void => {
		mouseX = e.nativeEvent.offsetX;
		mouseY = e.nativeEvent.offsetY;
	};

	const changeBtnEnter = (): void => {
		const btnBackImage = document.querySelector(
			".click-btn-img"
		) as HTMLElement;
		const btnEnterText = document.querySelector(
			".click-btn-text"
		) as HTMLElement;

		btnBackImage.style.height = "208px";
		btnBackImage.style.width = "208px";
		btnBackImage.style.boxShadow = "3px 2px 4px #000000";
		btnEnterText.style.fontSize = "50px";
	};

	const changeBtnLeave = (): void => {
		const btnBackImage = document.querySelector(
			".click-btn-img"
		) as HTMLImageElement;
		const btnEnterText = document.querySelector(
			".click-btn-text"
		) as HTMLSpanElement;

		btnBackImage.style.height = "258px";
		btnBackImage.style.width = "258px";
		btnBackImage.style.boxShadow = "5px 4px 4px #000000";
		btnEnterText.style.fontSize = "70px";
	};

	return (
		<section className="section-1">
			{showSignInBtn ? (
				<NavLink className="sign-in-link" to="/Registration">
					<span className="sign-in-text">Sign in for play</span>
				</NavLink>
			) : (
				<div
					className="click-btn"
					onMouseEnter={changeBtnEnter}
					onMouseLeave={changeBtnLeave}
				>
					<div
						className="click-btn-area"
						onClick={
							userSignIn ? setDataBlock : () => setShowSignInBtn(!showSignInBtn)
						}
						onMouseMove={onMouseMove}
					></div>
					<img
						className="click-btn-img"
						src={blockParent[blockCount].src}
						alt="Click Button Background"
					/>
					{userSignIn ? (
						<span className="click-btn-text">Claim</span>
					) : (
						<span className="click-btn-text">Play</span>
					)}
				</div>
			)}
		</section>
	);
};

export { ClickBtn };
