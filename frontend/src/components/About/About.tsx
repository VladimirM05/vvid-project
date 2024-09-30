import { FC } from "react";
import vk from "../../assets/images/vk.svg";
import tg from "../../assets/images/tg.svg";
import github from "../../assets/images/github.svg";
import "./About.pcss";

const About: FC = () => {
	return (
		<section className='about'>
			<nav className='about-list'>
				<a
					className='about-item'
					href='https://vk.me/join/NFjyTkFYzTYUW/ihV6SDWpelUvz_YGYnvBI='
					target='_blank'
					rel='noreferrer noopener'
				>
					<img className='about-img' src={vk} alt='VK Icon' />
				</a>
				<a
					className='about-item'
					href='https://web.telegram.org/k/#@Mister_vafl'
					target='_blank'
					rel='noreferrer noopener'
				>
					<img className='about-img' src={tg} alt='Telegram Icon' />
				</a>
				<a
					className='about-item'
					href='https://github.com/VladimirM05/vvid-project.git'
					target='_blank'
					rel='noreferrer noopener'
				>
					<img className='about-img' src={github} alt='GitHub Icon' />
				</a>
			</nav>
		</section>
	);
};

export { About };
