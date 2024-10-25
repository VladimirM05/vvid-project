import { FC, useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BalanceContext } from '../../pages/main/Main';
import axios from 'axios';
import { UserData2 } from '../UserData2/UserData2';
import { TopPlayerItem } from '../TopSideBarFunctions/TopPlayer/TopPlayerItem';
import MissionHandler from "../TopSideBarFunctions/Missions/MissionsLogic/MissionHandler";
import { weeklyMissions, dailyMissions } from "../TopSideBarFunctions/Missions/missionsData";
import ImageUploader from '../ImageUploader/ImageUploader';
import './profile-side-bar.pcss';

interface IProfileSideBar {
    isVisible: string;
    toggleVisibility: (isVisible: string) => void;
    isAnimating: boolean;
    walletAddress: string | null;
}

interface Player {
    name: string;
    balance: number;
    image: string;
}

interface UserProfileData {
    avatar: string;
    metaMaskAddress: string;
    rating: number;
    nickname: string;
}

const TopPlayersSideBar: FC<IProfileSideBar> = ({
    isVisible,
    toggleVisibility,
    isAnimating,
    walletAddress,
}) => {
    const context = useContext(BalanceContext);
    if (!context) {
        throw new Error('Header must be used within a BalanceProvider');
    }

    const { balance, setBalance } = context;
    const [userWalletAddress, setUserWalletAddress] = useState(walletAddress);
    const [weeklyMissionsState, setWeeklyMissionsState] = useState(weeklyMissions.map(mission => ({ ...mission })));
    const [dailyMissionsState, setDailyMissionsState] = useState(dailyMissions.map(mission => ({ ...mission })));

    const [userProfileData, setUserProfileData] = useState<UserProfileData>({
        avatar: "",
        metaMaskAddress: '',
        rating: 0,
        nickname: "",
    });

    const [topPlayers, setTopPlayers] = useState<Player[]>([]);

    const handleMissionComplete = (id: number) => {
        const mission = [...weeklyMissionsState, ...dailyMissionsState].find(m => m.id === id);
        if (mission) {
            setBalance(prevBalance => prevBalance + mission.bounty);
        }
    };

    const handleAvatarChange = (newAvatar: string) => {
        setUserProfileData(prevData => ({
            ...prevData,
            avatar: newAvatar,
        }));
    };

    const handleConfirm = () => {
        console.log('Изменения подтверждены');
    };

    useEffect(() => {
        const connectWallet = async () => {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    if (accounts && accounts.length > 0) {
                        setUserWalletAddress(accounts[0]);
                    }
                } catch (error) {
                    console.error('Ошибка подключения или получения данных пользователя: ', error);
                }
            } else {
                alert('Установите MetaMask!');
            }
        };

        connectWallet();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/get_user/${userWalletAddress}`);
                if (response.data) {
                    setUserProfileData({
                        avatar: response.data.image_base64 || "",
                        metaMaskAddress: response.data.wallet_address,
                        rating: response.data.rating || 0,
                        nickname: response.data.nickname || "",
                    });
                } else {
                    console.error('Ошибка: данные пользователя не найдены');
                }
            } catch (error) {
                console.error('Ошибка загрузки данных профиля: ', error);
            }
        };

        const fetchTopPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/top_players');
                if (response.data) {
                    const formattedTopPlayers = Object.keys(response.data).map(rank => {
                        const player = response.data[rank];
                        return {
                            rank: parseInt(rank, 10),
                            name: player.name,
                            balance: player.balance,
                            image: player.image_base64 ? `data:image/png;base64,${player.image_base64}` : '' // Преобразуем Base64 в формат для изображения
                        };
                    });
                    setTopPlayers(formattedTopPlayers);
                } else {
                    console.error('Ошибка: данные топ игроков не найдены');
                }
            } catch (error) {
                console.error('Ошибка загрузки топ игроков: ', error);
            }
        };

        fetchUserData();
        fetchTopPlayers();
    }, [userWalletAddress]);

    const sendRequestDatabase = async () => {
        try {
            await axios.put(
                `http://localhost:8000/api/update_user/${userWalletAddress}`,
                {
                    nickname: userProfileData.nickname,
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                },
            );
            console.log(userWalletAddress);
        } catch (error) {
            console.error('Ошибка при обновлении данных пользователя: ', error);
        }
    };

    return createPortal(
        <div
            className={isAnimating ? 'user-aside-container user-aside-container-hide' : 'user-aside-container'}
        >
            <div className="screen-filter" onClick={() => toggleVisibility('')}></div>
            <aside className={isAnimating ? 'user-aside user-aside-hide' : 'user-aside'}>
                <div className="user-aside-inner">
                    {isVisible === 'players' && (
                        <div>
                            <h4 className="user-aside-title">Топ Игроки</h4>
                            <div className="bestPlayers-container">
                                {Array.isArray(topPlayers) && topPlayers.map((player, index) => (
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
                                <ImageUploader
                                    onImageChange={handleAvatarChange}
                                    onConfirm={handleConfirm}
                                    walletAddress={userProfileData.metaMaskAddress}
                                    balance={balance}
                                    setBalance={setBalance}
                                />
                            </div>
                            <UserData2 text="Рейтинг" value={userProfileData.rating} />
                            <UserData2 text="Баланс" value={balance} />
                            <div className="user-nickname-container">
                                <div className="user-nickname">
                                    <span className="user-nickname-text">Имя пользователя</span>
                                    <input type="text" className="user-nickname-input" value={userProfileData.nickname} onChange={(e) => setUserProfileData({ ...userProfileData, nickname: e.target.value })}
                                    />
                                </div>
                                <button className="user-info-btn" onClick={sendRequestDatabase}>Подтвердить</button>
                            </div>
                        </div>
                    )}
                </div>
            </aside>
        </div>,
        document.querySelector('body') as HTMLElement
    );
};

export { TopPlayersSideBar };
