import "./logo.scss";
import { NavLink } from "react-router-dom";
import upFunc from "../../helpers/upFunc";

export default function Logo() {
	return (
		<div className="logo">
			<NavLink className="logo-link" onClick={upFunc} to="/">
				<span className="logo-first-word">
					<span className="first-letter-1">Σ</span>
					igma
				</span>
				<span className="logo-second-word">
					<span className="first-letter-2">R</span>
					ules
				</span>
			</NavLink>
		</div>
	)
}
