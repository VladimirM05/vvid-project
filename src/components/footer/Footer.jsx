import "./footer.scss";
import vk from "../../app/images/vk.svg.webp";
import up from "../../app/images/up.svg";
import githubLogo from "../../app/images/github-logo.png";
import githubText from "../../app/images/github-text.png";

export default function Footer() {
	function handleClick() {
		const listElement = document.querySelector('.footer-block-list');
		const titleImgElement = document.querySelector('.footer-block-img');
		if (listElement.classList.contains('disp')) {
			listElement.classList.remove('disp');
			titleImgElement.style.animation = 'title-img ease-out .3s';
			titleImgElement.style.transform = "rotate(180deg)";
		}
		else {
			listElement.classList.add('disp');
			titleImgElement.style.animation = 'title-img-reverse ease-out .3s';titleImgElement.style.transform = "rotate(0)";
		}
	}
	
	return (
		<footer className="footer">
			<div className="small-container">
				<div className="footer-inner">
					<h1 className="footer-title">
						Полезная информация
					</h1>
					<div className="footer-nav">
						<div className="footer-block">
							<div className="footer-block-title" onClick={handleClick}>
								<p className="footer-block-text">
									О нас
								</p>
								<img className="footer-block-img" src={up} alt=""/>
							</div>
							<ul className="footer-block-list disp">
								<li className="footer-block-item">
									<img className="footer-block-img" src={vk} alt="" />
									<a className="footer-block-link" href="https://vk.com/volodya_vova" target="_blank" rel="noreferrer">
										Владимир Малахов
									</a>
								</li>
								<li className="footer-block-item">
									<img className="footer-block-img" src={vk} alt="" />
									<a className="footer-block-link" href="https://vk.com/volodya_vova">
										Владимир Малахов
									</a>
								</li>
								<li className="footer-block-item">
									<img className="footer-block-img" src={vk} alt="" />
									<a className="footer-block-link" href="https://vk.com/volodya_vova">
										Владимир Малахов
									</a>
								</li>
								<li className="footer-block-item">
									<img className="footer-block-img" src={vk} alt="" />
									<a className="footer-block-link" href="https://vk.com/volodya_vova">
										Владимир Малахов
									</a>
								</li>
								<li className="footer-block-item">
									<img className="footer-block-img" src={vk} alt="" />
									<a className="footer-block-link" href="https://vk.com/volodya_vova">
										Владимир Малахов
									</a>
								</li>
								<li className="footer-block-item">
									<img className="footer-block-img" src={vk} alt="" />
									<a className="footer-block-link" href="https://vk.com/volodya_vova">
										Владимир Малахов
									</a>
								</li>
							</ul>
						</div>
						<div className="footer-block">
							<a className="logo" href="!#">
								Σigma
							</a>
							<div href="" className="github">
								<img className="github-logo" src={githubLogo} alt="Github logo" />
								<img className="github-logo" src={githubText} alt="Github logo" />
							</div>
						</div>
					</div>
				</div>	
			</div>	
		</footer>
	);
}
