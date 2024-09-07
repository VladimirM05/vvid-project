import { FC, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Games } from './pages/Games';
import { Questions } from './pages/Questions';
import { Registration } from './pages/Registration';
import './assets/styles/global.pcss';

export const App: FC = () => {
	// Проверка пользователя на авторизацию
	const [userSignIn, setUserSignIn] = useState<boolean>(false);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Main userSignIn={userSignIn} setUserSignIn={setUserSignIn} />
					}
				/>
				<Route path="/games" element={<Games />} />
				<Route path="/questions" element={<Questions />} />
				<Route
					path="/registration"
					element={
						<Registration
							userSignIn={userSignIn}
							setUserSignIn={setUserSignIn}
						/>
					}
				/>
				<Route path="*" />
			</Routes>
		</Router>
	);
};
