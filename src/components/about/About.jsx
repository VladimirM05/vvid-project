import "./about.scss";
import {aboutArray} from "../../helpers/aboutArray.js";
//import { useEffect, useState } from "react";
import up from "../../app/images/up.svg";

export default function About() {
	//const [bgColor, setColorFunc] = useState("background-color: rgba(255, 255, 255, 0.75)");

	return (
		<section className="section section-2">
			<div className="small-container">
				<div className="about">
					{aboutArray.map((a) => {
						return (
							a.id !== 9 ? 
							<div className="about-item" key={a.id}>{a.text}</div> : 
							<div className="about-item" key={a.id}>
								<img className="about-img" key={a.id} src={up} alt="aboutImg" />
							</div>
						)
					})}
				</div>
			</div>		
		</section>
	)
}
