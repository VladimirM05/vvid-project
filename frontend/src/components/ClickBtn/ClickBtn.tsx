import { FC, useContext, useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IBlock } from '@/interfaces/IBlock';
import { BalanceContext } from '@/pages/main/Main';
import { blocksArray } from '@/store/blocksArray';
import { soundsArray } from '../../store/soundArray';
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
let blockChildren: IBlock = Object.assign({}, blockParent[blockCount]);

// Координаты мыши относительно элемента .click-btn
let mouseX: number = 0;
let mouseY: number = 0;

// Координаты мыши относительно окна
let clientX: number = 0;
let clientY: number = 0;

const ClickBtn: FC = () => {
	const [showSignInBtn, setShowSignInBtn] = useState<boolean>(false);
	const [blockClickBtn, setBlockClickBtn] = useState<boolean>(true);
	const [showClickBtnText, setShowClickBtnText] = useState<boolean>(true);
	const changeCursor = useRef<HTMLDivElement | null>(null);
	// Состояния для обратного отчета на tnt
	const [count, setCount] = useState<number>(3);
	const [isCounting, setIsCounting] = useState<boolean>(false);
	const [showAnimation, setShowAnimation] = useState<boolean>(true);
	const [opacity, setOpacity] = useState<number>(1);
	const [fontSize, setFontSize] = useState<string>('64px');

	// Передача данных из Main с помощью хука useContext
	const context = useContext(BalanceContext);
	// Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
	if (!context) {
		throw new Error('Header must be used within a BalanceProvider');
	}
	const { balance, setBalance, userSignIn } = context;

	// Проверка первого блока
	useEffect(() => {
		if (blockChildren.cost === -5) {
			setIsCounting(true);
			setCount(3);
			setOpacity(1);
			setFontSize('64px');
		}
	}, []);

	// Счетчик на tnt
	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (isCounting && count > 0) {
			interval = setInterval((): void => {
				setShowAnimation(prevAnimation => true);
				setOpacity(0);
				setFontSize('48px');
				setTimeout(() => {
					setCount(prevCount => prevCount - 1);
					setOpacity(1);
					setFontSize('64px');
					setShowAnimation(prevAnimation => false);
				}, 600);
			}, 1000);
		} else if (count === 0) {
			setIsCounting(false);
			blockParent = Object.assign(
				{},
				blocksArray[getRandNum(0, blocksArray.length - 1)]
			);
		}

		return () => clearInterval(interval);
	}, [isCounting, count]);

	// функция проигрывания эффектов
	const playSound = (soundSrc: string): void => {
		const audio = new Audio(soundSrc);
		audio.play();
	};

	// Задержка при ломании блока
	const delayOnClick = (): void => {
		if (
			blockChildren.endurance === 1 &&
			blockCount === Object.keys(blockParent).length - 1
		) {
			setDataBlock();
			setBlockClickBtn(!blockClickBtn);
			const clickBtn = document.querySelector('.click-btn') as HTMLDivElement;
			let clickBtnOpacity: number = 0;

			const start: number = Date.now();
			const clickBtnTimer: NodeJS.Timeout = setInterval((): void => {
				const timePassed: number = Date.now() - start;
				clickBtnOpacity += 0.04;
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

	// Функция, срабатывающая после выполнения delayOnClick
	const setDataBlock = (): void => {
		setShowClickBtnText(false);

		blockChildren.endurance--;

		//определение звукового эффекта для текущего блока
		const soundIndex = blockParent[blockCount].kind;
		const sound =
			soundsArray[soundIndex][
				getRandNum(0, soundsArray[soundIndex].length - 1)
			];
		playSound(sound.src);

		// Отрисовывает элемент
		const clickBtn = document.querySelector<HTMLDivElement>('.click-btn');
		clickBtn?.insertAdjacentHTML(
			'beforeend',
			`<span class="balance-add" style="top:${mouseY}px; left:${mouseX}px">${
				blockChildren.endurance === 0 &&
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
			blockChildren.endurance === 0 &&
			blockCount !== Object.keys(blockParent).length - 1
		) {
			blockCount++;
			blockChildren = Object.assign({}, blockParent[blockCount]);
		}

		if (blockChildren.cost === -5 && isCounting) {
			setIsCounting(false);
		}

		// Условие, которое меняет блок на следующий
		if (
			blockChildren.endurance === 0 &&
			blockCount === Object.keys(blockParent).length - 1
		) {
			// Перестраховка на случай отрицательного баланса
			if (balance < 10 && blockChildren.cost < 0) {
				setBalance(0);
			} else {
				setBalance(balance + blockChildren.cost + 1);
			}

			blockParent = Object.assign(
				{},
				blocksArray[getRandNum(0, blocksArray.length - 1)]
			);
			blockCount = 0;
			blockChildren = Object.assign({}, blockParent[blockCount]);
		}
		if (blockChildren.cost === -5 && !isCounting) {
			console.log(blockChildren.cost);
			setIsCounting(true);
			setCount(3);
			setOpacity(1);
			setFontSize('64px');
		}
		let amount = 20; // количество частиц
		let x: any, y: any;
		if (clientX === 0 && clientY === 0) {
			const bbox = clickBtn?.getBoundingClientRect();
			if (bbox) {
				x = bbox.left + bbox.width / 2;
				y = bbox.top + bbox.height / 2;
			}
		} else {
			x = clientX;
			y = clientY;
		}

		for (let i = 0; i < amount; i++) {
			createParticle(x + 10, y + 10, 'square');
		}
	};

	// Отслеживание координат мыши
	const onMouseMove = (e: React.MouseEvent): void => {
		mouseX = e.nativeEvent.offsetX;
		mouseY = e.nativeEvent.offsetY;
		clientX = e.clientX;
		clientY = e.clientY;
	};

	const createParticle = (x: number, y: number, type: string) => {
		const particle = document.createElement('particle');
		document.body.appendChild(particle);
		let width = Math.floor(Math.random() * 10) + 8; // размер частиц
		let height = width;
		let destinationX = (Math.random() - 0.5) * 100; // расстояние вылета
		let destinationY = (Math.random() - 0.5) * 120; // расстояние вылета
		let rotation = Math.random() * 52;
		let delay = Math.random() * 20;
		switch (type) {
			case 'square':
				if (blockParent[blockCount].kind === 1) {
					particle.style.background = `hsl(${
						Math.random() * 20 + 20
					}, 70%, 60%)`; // цвет квадратов
					particle.style.border = '1px solid brown';
				} else if (blockParent[blockCount].kind === 2) {
					particle.style.background = `hsl(${30 + Math.random() * 10 - 5}, ${
						100 + Math.random() * 10 - 5
					}%, ${30 + Math.random() * 10 - 5}%)`;
					particle.style.border = '1px solid brown';
				} else if (blockParent[blockCount].kind === 3) {
					particle.style.background = `hsl(0, 0%, ${Math.random() * 100}%)`; // цвет квадратов
					particle.style.border = '1px solid gray';
				} else if (blockParent[blockCount].kind === 4) {
					particle.style.background = `hsl(${195 + Math.random() * 10 - 5}, ${
						80 + Math.random() * 10 - 5
					}%, ${50 + Math.random() * 10 - 5}%)`;
					particle.style.border = '1px solid white';
				}
				break;
		}
		particle.style.width = `${width}px`;
		particle.style.height = `${height}px`;
		const animation = particle.animate(
			[
				{
					transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
					opacity: 1,
				},
				{
					transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${
						y + destinationY
					}px) rotate(${rotation}deg)`,
					opacity: 0,
				},
			],
			{
				duration: Math.random() * 1000 + 500, // длительность анимации
				easing: 'cubic-bezier(0, .9, .57, 1)',
				delay: delay,
			}
		);
		animation.onfinish = removeParticle;
	};

	// Функция removeParticle
	const removeParticle = (e: any) => {
		e.srcElement.effect.target.remove();
	};

	const changeBtnEnter = (): void => {
		if (changeCursor.current) {
			changeCursor.current.style.cursor = `url(${pick}), auto`;
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
			changeCursor.current.style.cursor = 'default';
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
			<div
				className="click-btn"
				onMouseEnter={changeBtnEnter}
				onMouseLeave={changeBtnLeave}
				ref={changeCursor}
			>
				<NavLink
					className="click-btn-area"
					onClick={
						userSignIn
							? blockClickBtn
								? delayOnClick
								: undefined
							: () => setShowSignInBtn(!showSignInBtn)
					}
					onMouseMove={onMouseMove}
					to={userSignIn ? '/' : 'Registration'}
				></NavLink>
				<img
					className="click-btn-img"
					src={blockParent[blockCount].src}
					alt="Click Button Background"
				/>
				{!userSignIn ? (
					<span className="click-btn-text">Play</span>
				) : (
					<>
						<span className="click-btn-text">
							{showClickBtnText && 'Claim'}
						</span>
						{isCounting && (
							<span
								className="count"
								style={{
									opacity,
									fontSize,
									transition: showAnimation ? 'all 0.5s ease-out' : '',
								}}
							>
								{count}
							</span>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export { ClickBtn };
