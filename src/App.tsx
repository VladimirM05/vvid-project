import { FC, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '@/pages/main';
import { Games } from '@/pages/games';
import { Questions } from '@/pages/questions';
import { Registration } from '@/pages/registration';
import '@/assets/styles/global.pcss';

export const App: FC = () => {
	// Проверка пользователя на авторизацию
	const [userSignIn, setUserSignIn] = useState<boolean>(false);

	// console.log(__PLATFORM__, __ENV__);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback="Loading...">
							<Main userSignIn={userSignIn} setUserSignIn={setUserSignIn} />
						</Suspense>
					}
				/>
				<Route
					path="/games"
					element={
						<Suspense fallback="Loading...">
							<Games />
						</Suspense>
					}
				/>
				<Route
					path="/questions"
					element={
						<Suspense fallback="Loading...">
							<Questions />
						</Suspense>
					}
				/>
				<Route
					path="/registration"
					element={
						<Suspense fallback="Loading...">
							<Registration
								userSignIn={userSignIn}
								setUserSignIn={setUserSignIn}
							/>
						</Suspense>
					}
				/>
				<Route path="*" />
			</Routes>
		</Router>
	);
};
