import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
const About2 = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div className="col-lg-4 col-md-6 order-lg-1 order-3">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".1s"
						>
							<span className="count-icon">
								<i className="tji-complete"></i>
							</span>
							<span className="steps">01.</span>
							<div className="count-inner">
								<span className="count-text">Nursing MSD Rate</span>
								<FunfactSingle currentValue={60} symbol="%+" />
								<a 
									href="https://www.ijoem.com/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="source-link"
									style={{ fontSize: '11px', color: 'var(--tj-color-theme-primary)', display: 'block', marginTop: '5px' }}
								>
									Source: IJOEM ↗
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-sm-12 order-lg-2 order-1">
						<div
							className="about-content-area-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="about-content">
								<div className="sec-heading style-2">
								<span className="sub-title">The Problem</span>
								<h2 className="sec-title title-highlight">
									The Silent Crisis in Indian Healthcare
								</h2>
								<p>
									India has 1 nurse for every 670 patients — far below the{' '}
									<a href="https://www.who.int/data/gho/data/themes/topics/health-workforce" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--tj-color-theme-primary)', textDecoration: 'underline' }}>
										WHO recommendation of 1:300
									</a>. Manual patient transfers cause over 50% of musculoskeletal injuries among healthcare workers. In a nation striving to become a global healthcare leader, our caregivers deserve better tools.
								</p>
								</div>
								<div className="wow fadeInUp" data-wow-delay=".3s">
									<ButtonPrimary
										text={"Read the Full Problem Analysis"}
										url={"/problem"}
										isTextBtn={true}
									/>
								</div>
							</div>
							<div className="video-img wow fadeInRight" data-wow-delay=".7s">
								<Image
									src="/images/about/about-3.webp"
									alt="Image"
									width={120}
									height={320}
								/>
								<PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span>
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-3 order-2">
						<div
							className="customers-box style-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div
								className="customers-bg"
								style={{ backgroundImage: "url('/images/about/about-4.webp')" }}
							></div>
							<div className="customers">
								<ul>
									<li className="wow fadeInLeft" data-wow-delay=".3s">
										<img src="/images/testimonial/client-1.webp" alt="" />
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".4s">
										<img src="/images/testimonial/client-2.webp" alt="" />
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".5s">
										<img src="/images/testimonial/client-3.webp" alt="" />
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".6s">
										<span>
											<i className="tji-plus"></i>
										</span>
									</li>
								</ul>
							</div>
							<h6
								className="customers-text wow fadeInLeft"
								data-wow-delay=".6s"
							>
								Recognized by Kerala Startup Mission, Startup India & Healthcare Organizations.
							</h6>
							<div className="star-icon zoomInOut">
								<img src="/images/shape/star.svg" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-4 order-4">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<span className="count-icon">
								<i className="tji-worldwide"></i>
							</span>
							<span className="steps">02.</span>
							<div className="count-inner">
								<span className="count-text">Nursing Shortage</span>
								<FunfactSingle currentValue={600000} symbol="+" />
								<a 
									href="https://www.niti.gov.in/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="source-link"
									style={{ fontSize: '11px', color: 'var(--tj-color-theme-primary)', display: 'block', marginTop: '5px' }}
								>
									Source: NITI Aayog ↗
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-5 order-5">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
							<span className="steps">03.</span>
							<div className="count-inner">
								<span className="count-text">Nurse:Patient Ratio</span>
								<FunfactSingle currentValue={1} symbol=":670" />
								<a 
									href="https://main.mohfw.gov.in/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="source-link"
									style={{ fontSize: '11px', color: 'var(--tj-color-theme-primary)', display: 'block', marginTop: '5px' }}
								>
									Source: MoHFW ↗
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About2;
