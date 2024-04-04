import "./about.scss";
import {aboutArray} from "../../helpers/aboutArray.js";

export default function About() {
	return (
		<div className="section2">
			<div className="small-container">
				<div className="about">
					{aboutArray.map((a, i) => {
						return (
							<div className="about-item" id={aboutArray[i]} key={aboutArray[i]}>{aboutArray[i].text}</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
