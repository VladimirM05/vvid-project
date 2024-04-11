import "./styles/style.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Market from "./pages/Market";
import Rating from "./pages/Rating";
import Header from "./components/header/Header";
import Up from "./components/up/Up";
import Footer from "./components/footer/Footer";

export default function Main() {
	return (
		<>
			<Router>
				<Header />
				<Up />
				<div class="wallpaper"></div>
				<main className="main">
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/Games" element={<Games />} />
						<Route path="/Market" element={<Market />} />
						<Route path="/Rating" element={<Rating />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
}
