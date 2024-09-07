import { FC } from "react";
import { RegForm } from "../components/RegForm/RegForm";

interface IRegistration {
	userSignIn: boolean;
	setUserSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Registration: FC<IRegistration> = ({ userSignIn, setUserSignIn }) => {
	return <RegForm userSignIn={userSignIn} setUserSignIn={setUserSignIn} />;
};

export { Registration };
