import { FC } from "react";
import "./UserData2.pcss";

interface IUserData2 {
	text: string;
	value: number | null;
}

const UserData2: FC<IUserData2> = ({ text, value }) => {
	return (
		<div className="user-data2">
			<span className="user-data2-text">{text}</span>
			<div className="user-data2-container">
				<span className="user-data2-value">{value}</span>
			</div>
		</div>
	);
};

export { UserData2 };
