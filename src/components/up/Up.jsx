import React from "react";
import "./up.scss";
import up from "../../app/images/up.svg";
import upFunc from "../../helpers/upFunc";

export default function Up() {
	const [scroll, setScroll] = React.useState(0);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};
	
	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	
	return (
		<div className={scroll <= 256 ? "up disp" : "up"} onClick={upFunc}>
    	<img className="up__img" src={up} alt='up'></img>
  	</div>
	);
}
