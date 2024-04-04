import "./styles/style.scss";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Up from "./components/up/Up";
import Footer from "./components/footer/Footer";

export default function Main() {
	return (
		<>
			<Header />
			<Up />
			<main className="main">
				<Home />
			</main>
			<Footer />
		</>
	);
}
