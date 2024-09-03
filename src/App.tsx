import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Games } from "./pages/Games";
import { Questions } from "./pages/Questions";
import { Registration } from "./pages/Registration";
import "./assets/styles/global.pcss";

const App: FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/games" element={<Games />} />
				<Route path="/questions" element={<Questions />} />
				<Route path="/registration" element={<Registration />} />
			</Routes>
		</Router>
	);
};

export { App };
