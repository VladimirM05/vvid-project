import { FC } from "react";

interface TopPlayerItemProps {
    rank: number;
    name: string;
    balance: number;
    image: string; // Пропс для аватарки
}

export const TopPlayerItem: FC<TopPlayerItemProps> = ({ rank, name, balance, image }) => {
    return (
        <div className="top-player-item">
            <span className="player-rank">{rank}</span>
            <img src={image} alt={`${name}'s avatar`} className="player-avatar" />
            <div className="player-info">
                <span className="player-name">{name}</span>
                <span className="player-balance">Баланс: {balance}</span>
            </div>
        </div>
    );
};