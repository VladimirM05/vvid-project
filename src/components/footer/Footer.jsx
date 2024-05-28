import "./footer.scss";
import vk from "../../app/images/vk.svg.webp";
import plus from "../../app/images/plus.svg";
import githubLogo from "../../app/images/github-logo.png";
import githubText from "../../app/images/github-text.png";
import Logo from "../logo/Logo";

export default function Footer() {
	function handleClick() {
		const listElement = document.querySelector('.nav-list-vk');
		const titleImgElement = document.querySelector('.footer-block-img');

		if (listElement.style.display === "none" || listElement.style.display === "") {
			listElement.style.display = "block";
			titleImgElement.style.animation = 'title-img ease-out .3s';
			titleImgElement.style.transform = "rotate(135deg)";
		}
		else {
			listElement.style.display = 'none';
			titleImgElement.style.animation = 'title-img-reverse ease-out .3s';
			titleImgElement.style.transform = "rotate(0)";
		}
	}
	
	return (
		<footer className="footer">
			<div className="small-container">
				<div className="footer-inner">
					<h2 className="footer-title">
						Полезная информация
					</h2>
					<div className="footer-nav">
						<div className="footer-block">
							<div className="footer-block-title">
								<p className="footer-block-text">
									Ещё
								</p>
							</div>
							<ul className="nav-list">
								<li className="nav-item">
									<a className="nav-link" href="!#" target="_blank" rel="noreferrer">
										Кликер
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="!#" target="_blank" rel="noreferrer">
										Профиль	
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="!#" target="_blank" rel="noreferrer">
										Поддержка
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="!#" target="_blank" rel="noreferrer">
										FAQ
									</a>
								</li>
							</ul>
						</div>
						<div className="footer-block">	
							<div className="footer-block-title footer-block-title-vk" onClick={handleClick}>
								<p className="footer-block-text">
									О нас
								</p>
								<img className="footer-block-img" src={plus} alt="Cross" />
							</div>
							<ul className="nav-list nav-list-vk">
								<li className="nav-item">
									<img className="nav-img" src={vk} alt="" />
									<a className="nav-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										zhumajsynba
									</a>
								</li>
								<li className="nav-item">
									<img className="nav-img" src={vk} alt="" target="_blank" rel="noreferrer"/>
									<a className="nav-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										volodya_vova
									</a>
								</li>
								<li className="nav-item">
									<img className="nav-img" src={vk} alt="" />
									<a className="nav-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										verticce
									</a>
								</li>
								<li className="nav-item">
									<img className="nav-img" src={vk} alt="" />
									<a className="nav-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										mshubny
									</a>
								</li>
								<li className="nav-item">
									<img className="nav-img" src={vk} alt="" />
									<a className="nav-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										Никита П.
									</a>
								</li>
								<li className="nav-item">
									<img className="nav-img" src={vk} alt="" />
									<a className="nav-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										zwarder
									</a>
								</li>
								<li className="nav-item">
									<img className="nav-img" src={vk} alt="" />
									<a className="nav-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										kolia_shylo
									</a>
								</li>
								<li className="nav-item">
									<img className="nav-img" src={vk} alt="" />
									<a className="nav-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										kotokotov
									</a>
								</li>
							</ul>
							<a className="github" href="https://github.com/VladimirM05/vvid-project" target="_blank" rel="noreferrer">								
								<img className="github-logo" src={githubLogo} alt="Github logo" />
								<img className="github-text" src={githubText} alt="Github text" />
							</a>
							<Logo />
						</div>
					</div>
					<div className="footer-bottom">
						<p className="footer-bottom-text">ICTIS 2024</p>
					</div>
				</div>	
			</div>	
		</footer>
	);
}
