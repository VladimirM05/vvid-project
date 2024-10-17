import { FC } from "react";

interface ITopPlayerItem {
	rank: number;
	name: string;
	balance: number;
	image: string;
}

export const TopPlayerItem: FC<ITopPlayerItem> = ({ rank, name, balance, image }) => {
	return (
		<div className="top-player-item">
			<span className="top-player-rank">{rank}</span>
			<img className="top-player-image" src={image} alt={name} />
			<span className="top-player-name">{name}</span>
			<span className="top-player-balance">Баланс: {balance}</span>
		</div>
	);
};
