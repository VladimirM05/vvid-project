import "./about.scss";
import {aboutArray} from "../../helpers/aboutArray.js";
//import { useEffect, useState } from "react";
import up from "../../app/images/up.svg";

export default function About() {
	//const [bgColor, setColorFunc] = useState("background-color: rgba(255, 255, 255, 0.75)");

	return (
		<div className="section2">
				<div className="about">
					{aboutArray.map((a) => {
						return (
							a.id !== 9 ? <div className="about-item" key={a.id}>{a.text}</div> : <img className="about-img" key={a.id} src={up} alt="aboutImg"></img>
						)
					})}
				</div>
		</div>
	)
}
