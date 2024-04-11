import "./logo.scss";
import { NavLink } from "react-router-dom";
import upFunc from "../../helpers/upFunc";

export default function Logo() {
	return (
		<div className="logo">
			<NavLink className="logo-link" onClick={upFunc} to="/">
				Σigma
			</NavLink>
		</div>
	)
}
