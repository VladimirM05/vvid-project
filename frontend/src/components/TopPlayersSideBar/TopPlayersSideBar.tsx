import { FC, useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BalanceContext } from '../../pages/main/Main';
import { UserData } from '../UserData/UserData';
import { UserData2 } from '../UserData2/UserData2';
import { TopPlayerItem } from '../TopSideBarFunctions/TopPlayer/TopPlayerItem';
import profile from '@/assets/images/gandonioCat.png';
import './TopPlayersSideBar.pcss';
import MissionHandler from "../TopSideBarFunctions/Missions/MissionsLogic/MissionHandler";
import { weeklyMissions, dailyMissions } from "../TopSideBarFunctions/Missions/missionsData";
import axios from 'axios';

interface ITopPlayersSideBar {
    isVisible: string;
    toggleVisibility: (isVisible: string) => void;
    isAnimating: boolean;
}

interface Player {
    name: string;
    balance: number;
    image: string;
}

interface UserProfileData {
    avatar: string;
    mail: string;
    metaMaskAddress: string;
    rating: number | null;
    earnedTokens: number;
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

    const [userProfileData, setUserProfileData] = useState<UserProfileData>({
        avatar: profile,
        mail: '',
        metaMaskAddress: '',
        rating: null,
        earnedTokens: balance,
    });

    const [topPlayers, setTopPlayers] = useState<Player[]>([]);

    const handleMissionComplete = (id: number) => {
        const mission = [...weeklyMissionsState, ...dailyMissionsState].find(m => m.id === id);
        if (mission) {
            setBalance(prevBalance => prevBalance + mission.bounty);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/get_user/your_wallet_address');
                setUserProfileData({
                    avatar: response.data.image_base64,
                    mail: response.data.mail,
                    metaMaskAddress: response.data.wallet_address,
                    rating: response.data.rating,
                    earnedTokens: response.data.balance,
                });
            } catch (error) {
                console.error('Ошибка загрузки данных профиля: ', error);
            }
        };

        const fetchTopPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/top_players');
                setTopPlayers(response.data);
            } catch (error) {
                console.error('Ошибка загрузки топ игроков: ', error);
            }
        };

        fetchUserData();
        fetchTopPlayers();
    }, []);

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
                                        key={index}
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
                                    src={`data:image/png;base64,${userProfileData.avatar}`}
                                    alt="User Icon"
                                />
                            </div>
                            <div className="user-profile-container">
                                <UserData text="Mail" value={userProfileData.mail} />
                                <UserData text="MetaMask address" value={userProfileData.metaMaskAddress} />
                            </div>
                            <UserData2 text="Рейтинг" value={userProfileData.rating} />
                            <UserData2 text="Заработано токенов" value={userProfileData.earnedTokens} />
                        </div>
                    )}
                </div>
            </aside>
        </div>,
        document.querySelector('body') as HTMLElement
    );
};

export { TopPlayersSideBar };