import { FC, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { BalanceContext } from '../../pages/main/Main';
import { UserData } from '../UserData/UserData';
import { UserData2 } from '../UserData2/UserData2';
import { TopPlayerItem } from '../TopSideBarFunctions/TopPlayer/TopPlayerItem';
import profile from '@/assets/images/gandonioCat.png';
import './TopPlayersSideBar.pcss';
import MissionHandler from "../TopSideBarFunctions/Missions/MissionsLogic/MissionHandler";
import { weeklyMissions, dailyMissions } from "../TopSideBarFunctions/Missions/missionsData";

interface ITopPlayersSideBar {
    isVisible: string;
    toggleVisibility: (isVisible: string) => void;
    isAnimating: boolean;
}

const TopPlayersSideBar: FC<ITopPlayersSideBar> = ({
    isVisible,
    toggleVisibility,
    isAnimating,
}) => {
    // Передача данных из Main с помощью хука useContext
    const context = useContext(BalanceContext);
    // Если Header будет использоваться вне BalanceContext.Provider, появится данная ошибка, которая укажет на ошибку использования
    if (!context) {
        throw new Error('Header must be used within a BalanceProvider');
    }
    const { balance, setBalance } = context;

    const [weeklyMissionsState, setWeeklyMissionsState] = useState(weeklyMissions.map(mission => ({ ...mission})));
    const [dailyMissionsState, setDailyMissionsState] = useState(dailyMissions.map(mission => ({ ...mission})));

    const topPlayers = [
        { id: 1, name: "Player1", balance: balance, image: profile },
        { id: 2, name: "Player2", balance: 950, image: profile },
        { id: 3, name: "Player3", balance: 900, image: profile },
        { id: 4, name: "Player4", balance: 850, image: profile },
        { id: 5, name: "Player5", balance: 800, image: profile },
        { id: 6, name: "Player6", balance: 750, image: profile },
        { id: 7, name: "Player7", balance: 700, image: profile },
        { id: 8, name: "Player8", balance: 650, image: profile },
        { id: 9, name: "Player9", balance: 600, image: profile },
        { id: 10, name: "Player10", balance: 550, image: profile },
        { id: 11, name: "You", balance: 100, image: profile}
    ];

    const handleMissionComplete = (id: number) => {
        const mission = [...weeklyMissionsState, ...dailyMissionsState].find(m => m.id === id);
        if (mission) {
            setBalance(prevBalance => prevBalance + mission.bounty);
        }
    };

    return createPortal(
        <div
            className={
                isAnimating
                    ? 'user-aside-container user-aside-container-hide'
                    : 'user-aside-container'
            }
        >
            <div className="screen-filter" onClick={() => toggleVisibility('')}></div>
            <aside
                className={isAnimating ? 'user-aside user-aside-hide' : 'user-aside'}
            >
                <div className="user-aside-inner">
                    {isVisible === 'players' && (
                        <div>
                            <h4 className="user-aside-title">Топ Игроки</h4>
                            <div className="bestPlayers-container">
                                {topPlayers.map((player, index) => (
                                    <TopPlayerItem
                                        key={player.id}
                                        rank={index + 1}
                                        name={player.name}
                                        balance={player.balance}
                                        image={player.image}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {isVisible === 'missions' && (
                        <div>
                            <h4 className="user-aside-title">Миссии</h4>
                            <div className="missions-container">
                                <div className="missions-section">
                                    <h5 className="missions-section-title">Ежедневные</h5>
                                    <MissionHandler missions={dailyMissionsState} onMissionComplete={handleMissionComplete} balance={balance} />
                                </div>
                                <div className="missions-section">
                                    <h5 className="missions-section-title">Еженедельные</h5>
                                    <MissionHandler missions={weeklyMissionsState} onMissionComplete={handleMissionComplete} balance={balance} />
                                </div>
                            </div>
                        </div>
                    )}
                    {isVisible === 'profile' && (
                        <div className="user-profile">
                            <div className="user-profile-avatar">
                                <img
                                    className="user-profile-avatar-img"
                                    src={profile}
                                    alt="User Icon"
                                />
                            </div>
                            <div className="user-profile-container">
                                <UserData text="Mail" value="" />
                                <UserData text="MetaMask address" value="" />
                            </div>
                            <UserData2 text="Рейтинг" value={null} />
                            <UserData2 text="Заработано токенов" value={balance} />
                        </div>
                    )}
                </div>
            </aside>
        </div>,
        document.querySelector('body') as HTMLElement
    );
};

export { TopPlayersSideBar };