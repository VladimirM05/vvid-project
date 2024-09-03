import { FC } from "react";
import gamesBack from "../../assets/images/gamesBack.jpg"
import "./GamesList.pcss";

const GamesList: FC = () => {
	return (
		<div className='games-wallpaper' style={{backgroundImage: `url(${gamesBack})`}}>
			<section className='games'>
				<h4 className='games-title'>Мини-игры</h4>
			</section>
		</div>
	);
};

export { GamesList };
