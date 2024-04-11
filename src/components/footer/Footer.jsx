import "./footer.scss";
import vk from "../../app/images/vk.svg.webp";
import up from "../../app/images/up.svg";
import githubLogo from "../../app/images/github-logo.png";
import githubText from "../../app/images/github-text.png";
import Logo from "../logo/Logo";

export default function Footer() {
	function handleClick(e) {
		const listElement = document.getElementsByClassName('nav-list');
		const titleImgElement = document.getElementsByClassName('footer-block-img');

		if (listElement[e].style.display === 'none' || listElement[e].style.display === '') {
			listElement[e].style.display = 'block';
			titleImgElement[e].style.animation = 'title-img ease-out .3s';
			titleImgElement[e].style.transform = "rotate(180deg)";
		}
		else {
			listElement[e].style.display = 'none';
			titleImgElement[e].style.animation = 'title-img-reverse ease-out .3s';
			titleImgElement[e].style.transform = "rotate(0)";
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
							<div className="footer-block-title" onClick={() => handleClick(0)}>
								<p className="footer-block-text">
									О нас
								</p>
								<img className="footer-block-img" src={up} alt=""/>
							</div>
							<ul className="nav-list">
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
										Никита Подкопаев
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
						</div>
						<div className="footer-block">
							<div className="footer-block-title" onClick={() => handleClick(1)}>
								<p className="footer-block-text">
									Ещё
								</p>
								<img className="footer-block-img" src={up} alt=""/>
							</div>
							<ul className="nav-list">
								<li className="nav-item">
									<a className="nav-link" href="!#" target="_blank" rel="noreferrer">
										Поддержка
									</a>
								</li>
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
							</ul>
						</div>
						<div className="footer-block">	
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
