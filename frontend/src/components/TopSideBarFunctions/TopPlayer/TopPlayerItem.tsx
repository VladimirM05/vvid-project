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
            <span className="top-player-rank">{rank}</span>
            <img src={image} alt={`${name}'s avatar`} className="top-player-image" />
            <div className="player-info">
                <span className="top-player-name">{name}</span>
                <span className="top-player-balance">{balance}</span>
            </div>
        </div>
    );
};