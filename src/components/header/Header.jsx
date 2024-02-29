import "./header.css";

export default function Header() {
	return (
		<header class="header">
			<div class="header__inner">
				<div class="header__box">
					<a class="logo" href="#">
						Σigma
					</a>
					<ul class="menu__list">
						<li class="menu__item">
							<a class="menu__link" href="#">
								Main
							</a>
						</li>
						<li class="menu__item">
							<a class="menu__link" href="#">
								Clicker
							</a>
						</li>
						<li class="menu__item">
							<a class="menu__link" href="#">
								Market
							</a>
						</li>
						<li class="menu__item">
							<a class="menu__link" href="#">
								Rating
							</a>
						</li>
					</ul>
					<div class="user">
						<img class="user__profile" src="../src/app/images/person-circle-outline.svg"></img>
						<button class="user__login">Login</button>
					</div>
				</div>
			</div>
			<div class="profile disp">

			</div>
		</header>
	);
}
	