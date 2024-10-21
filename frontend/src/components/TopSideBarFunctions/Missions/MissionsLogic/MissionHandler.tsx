import React, { useState, useEffect } from "react";

interface IMission {
    id: number;
    title: string;
    description: string;
    bounty: number;
    completed: boolean;
    target: number;
}

interface IMissionHandlerProps {
    missions: IMission[];
    onMissionComplete: (id: number) => void;
    balance: number;
}

const MissionHandler: React.FC<IMissionHandlerProps> = ({ missions, onMissionComplete, balance }) => {
    const [mission1, setMission1] = useState(10);
    const [mission2, setMission2] = useState(1);
    const [mission3, setMission3] = useState(5);
    const [mission4, setMission4] = useState(982);
    const [mission5, setMission5] = useState(982);
    
    

    return (
        <ul className="missions-list">
            {missions.map(mission => (
                <li key={mission.id} className="mission-item">
                    <div className="mission-title">{mission.title}</div>
                    <div className="mission-description">{mission.description}</div>
                    <div className="mission-bounty">{mission.bounty}</div>
                    {!mission.completed && (
                        <div className="mission-progress">
                            {mission.id === 1 && `${mission1}/${mission.target}`}
                            {mission.id === 2 && `${mission2}/${mission.target}`}
                            {mission.id === 3 && `${mission3}/${mission.target}`}
                            {mission.id === 4 && `${mission4}/${mission.target}`}
                            {mission.id === 5 && `${mission5}/${mission.target}`}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MissionHandler;