import "./profile.scss";

const userElement = document.querySelector('.user__profile');
const profileElement = document.querySelector('.profile');

// userElement.addEventListener('click', () => {
// 	if (profileElement.classList.contains('disp')) {
// 		profileElement.classList.remove('disp');
// 	}
// 	else {
// 		profileElement.classList.add('disp');
// 	}
// })

export default function Profile() {
	return (
		<div className="profile disp">

		</div>
	);
}
