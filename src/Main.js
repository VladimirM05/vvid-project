import "./style.css";
import Header from "./components/header/Header";
// import up from "./app/images/chevron-up-outline.svg"
// import profile from "./app/images/person-circle-outline.svg"

//const upBtn = ReactDOMClient.createRoot(document.querySelector(".up"));

// const userElement = document.querySelector('.user__profile');
// const profileElement = document.querySelector('.profile');

// userElement.addEventListener('click', function () {
//   if (profileElement.classList.contains('disp')) {
//     profileElement.classList.remove('disp');
//   }
//   else {
//     profileElement.classList.add('disp');
//   }
// });

export default function Main() {
	return (
		<Header />
	);
}
