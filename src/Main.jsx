import "./styles/style.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
// import RegForm from "./components/reg-form/RegForm";
import Games from "./pages/Games";
import Market from "./pages/Market";
import Rating from "./pages/Rating";
import Header from "./components/header/Header";
import Up from "./components/up/Up";
import Footer from "./components/footer/Footer";

import ScrollToTop from "./utils/ScrollToTop";
import { MetaMaskProvider } from "metamask-react";

export default function Main() {
	return (
		<MetaMaskProvider>
			<Router>
				<ScrollToTop />
				<Header />
				<Up />
				<div className="wallpaper"></div>
				{ /* <RegForm /> */ }
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
		</MetaMaskProvider>
	);
}
