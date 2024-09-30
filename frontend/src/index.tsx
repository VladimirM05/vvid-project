import ReactDOM from "react-dom/client";
import { App } from "./App";

const wrapper = ReactDOM.createRoot(
	document.querySelector(".wrapper") as Element
);
wrapper.render(<App />);
