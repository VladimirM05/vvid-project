import { FC } from "react";
import "./UserData.pcss";

interface IUserData {
	text: string;
	value: string;
}

const UserData: FC<IUserData> = ({ text, value }) => {
	return (
		<div className="user-data">
			<span className="user-data-text">{text}</span>
			<div className="user-data-container">
				<span className="user-data-value">{value}</span>
			</div>
		</div>
	);
};

export { UserData };
