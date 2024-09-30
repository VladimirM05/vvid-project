import { FC, useEffect } from 'react';
import { BackMainBtn } from '../../components/buttons/BackMainBtn/BackMainBtn';
import { GamesList } from '../../components/GamesList/GamesList';

const Games: FC = () => {
	useEffect(() => {
		document.title = 'Мини-игры';
	}, []);

	return (
		<>
			<BackMainBtn />
			<GamesList />
		</>
	);
};

export default Games;
