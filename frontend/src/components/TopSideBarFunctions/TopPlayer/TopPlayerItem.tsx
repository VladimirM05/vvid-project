import { FC } from "react";

interface ITopPlayerItem {
	rank: number;
	name: string;
	balance: number;
	image: string;
}

const TopPlayerItem: FC<ITopPlayerItem> = ({ rank, name, balance, image }) => {
	return (
		<div className="top-player-item">
			<div className="top-player-rank">{rank}</div>
			<img className="top-player-image" src={image} alt={name} />
			<div className="top-player-name">{name}</div>
			<div className="top-player-balance">Баланс: {balance}</div>
		</div>
	);
};

export { TopPlayerItem };