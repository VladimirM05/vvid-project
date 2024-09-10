import { FC, Dispatch, SetStateAction } from 'react';
import { RegForm } from '../../components/RegForm/RegForm';

interface IRegistration {
	userSignIn: boolean;
	setUserSignIn: Dispatch<SetStateAction<boolean>>;
}

const Registration: FC<IRegistration> = ({ userSignIn, setUserSignIn }) => {
	return <RegForm userSignIn={userSignIn} setUserSignIn={setUserSignIn} />;
};

export default Registration;
