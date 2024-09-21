import { FC, useContext, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IBlock } from '@/interfaces/IBlock';
import { BalanceContext } from '@/pages/main/Main';
import { blocksArray } from '@/store/blocksArray';
import pick from '../../assets/images/pick.png';
import './ClickBtn.pcss';

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
	const [blockClickBtn, setBlockClickBtn] = useState<boolean>(true);
	const [showClickBtnText, setShowClickBtnText] = useState<boolean>(true);
	const changeCursor = useRef<HTMLDivElement | null>(null);

	// Передача данных из Main с помощью хука useContext
	const context = useContext(BalanceContext);
	// Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
	if (!context) {
		throw new Error('Header must be used within a BalanceProvider');
	}
	const { balance, setBalance, userSignIn } = context;

	// Задержка при ломании блока
	const delayOnClick = (): void => {
		setShowClickBtnText(false);

		if (
			block2.endurance === 1 &&
			blockCount === Object.keys(blockParent).length - 1
		) {
			setDataBlock();
			setBlockClickBtn(!blockClickBtn);
			const clickBtn = document.querySelector('.click-btn') as HTMLDivElement;
			let clickBtnOpacity: number = 0;

			const start: number = Date.now();
			const clickBtnTimer: NodeJS.Timeout = setInterval((): void => {
				const timePassed: number = Date.now() - start;
				clickBtnOpacity += 0.02;
				clickBtn.style.opacity = String(clickBtnOpacity);

				if (timePassed >= 500) {
					setBlockClickBtn(prevValue => !prevValue);
					clickBtnOpacity = 0;
					clearInterval(clickBtnTimer);
				}
			}, 10);
		} else {
			setDataBlock();
		}
	};

	// Функция, срабатывающая при нажатии на кнопку
	const setDataBlock = (): void => {
		block2.endurance--;

		// Отрисовывает элемент
		const clickBtn = document.querySelector<HTMLDivElement>('.click-btn');
		clickBtn?.insertAdjacentHTML(
			'beforeend',
			`<span class="balance-add" style="top:${mouseY}px; left:${mouseX}px">${
				block2.endurance === 0 &&
				blockCount === Object.keys(blockParent).length - 1
					? blockParent[blockCount].cost >= 0
						? '+' + blockParent[blockCount].cost
						: blockParent[blockCount].cost
					: '+1'
			}
		</span>`
		);

		const lastchild = clickBtn?.lastChild as HTMLSpanElement;
		const prevMouseY: number = mouseY;
		let top: number = 0;
		const start: number = Date.now();
		const timer: NodeJS.Timeout = setInterval((): void => {
			const timePassed: number = Date.now() - start;
			top += 3;
			lastchild.style.top = prevMouseY - top + 'px';

			if (timePassed >= 300) {
				lastchild.style.opacity = '0';
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
		if (changeCursor.current) {
			console.log(changeCursor.current.style.cursor);
			changeCursor.current.style.cursor = `url(${pick}), auto`;
			console.log(changeCursor.current.style.cursor);
		}

		const btnBackImage = document.querySelector(
			'.click-btn-img'
		) as HTMLElement;
		const btnEnterText = document.querySelector(
			'.click-btn-text'
		) as HTMLElement;

		btnBackImage.style.height = '250px';
		btnBackImage.style.width = '250px';
		btnBackImage.style.boxShadow = '3px 2px 4px #000000';
		btnEnterText.style.fontSize = '55px';
	};

	const changeBtnLeave = (): void => {
		if (changeCursor.current) {
			console.log(changeCursor.current.style.cursor);
			changeCursor.current.style.cursor = 'default';
			console.log(changeCursor.current.style.cursor);
		}

		const btnBackImage = document.querySelector(
			'.click-btn-img'
		) as HTMLImageElement;
		const btnEnterText = document.querySelector(
			'.click-btn-text'
		) as HTMLSpanElement;

		btnBackImage.style.height = '300px';
		btnBackImage.style.width = '300px';
		btnBackImage.style.boxShadow = '5px 4px 4px #000000';
		btnEnterText.style.fontSize = '70px';
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
					ref={changeCursor}
				>
					<div
						className="click-btn-area"
						onClick={
							userSignIn
								? blockClickBtn
									? delayOnClick
									: undefined
								: () => setShowSignInBtn(!showSignInBtn)
						}
						onMouseMove={onMouseMove}
					></div>
					<img
						className="click-btn-img"
						src={blockParent[blockCount].src}
						alt="Click Button Background"
					/>
					{!userSignIn ? (
						<span className="click-btn-text">Play</span>
					) : (
						<span className="click-btn-text">
							{showClickBtnText && 'Claim'}
						</span>
					)}
				</div>
			)}
		</section>
	);
};

export { ClickBtn };
