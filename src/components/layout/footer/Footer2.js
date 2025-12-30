import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import MarqueeSlider1 from "@/components/shared/marquee/MarqueeSlider1";
import Link from "next/link";

const Footer2 = () => {
	return (
		<footer className="tj-footer-section footer-2 section-gap-x">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="footer-subscribe wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="subscribe-logo">
								<img src="/logo/pydart_logo.png" alt="PyDart Logo" />
								</div>
								<div className="subscribe-form">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Enter email"
										/>
										<ButtonPrimary text={"Send Message"} type="submit" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-1 wow fadeInUp"
								data-wow-delay=".1s"
							>
								<div className="footer-logo">
									<Link href="/">
										<img src="/logo/pydart_logo.png" alt="PyDart Logo" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Made in India. Made for the World. India's first indigenous robotic patient transfer system — currently in prototype development, accepting investments.
									</p>
								</div>
								<div className="award-logo-area">
									<div className="award-logo">
										<img src="/images/footer/award-logo-white-1.webp" alt="" />
									</div>
									<div className="award-logo">
										<img src="/images/footer/award-logo-white-2.webp" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Product</h5>
								<ul>
									<li>
										<Link href="/product/altras-1">ALTRAS-1 Overview</Link>
									</li>
									<li>
										<Link href="/how-it-works">How It Works – ZRV</Link>
									</li>
									<li>
										<Link href="/technology">Technology</Link>
									</li>
									<li>
										<Link href="/safety">Safety & Compliance</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Solutions</h5>
								<ul>
									<li>
										<Link href="/solutions/hospital-administrators">Hospital Administrators</Link>
									</li>
									<li>
										<Link href="/solutions/nursing-staff">Nursing Staff</Link>
									</li>
									<li>
										<Link href="/solutions/biomedical-engineers">Biomedical Engineers</Link>
									</li>
									<li>
										<Link href="/resources/blogs">Blogs</Link>
									</li>
									<li>
										<Link href="/resources/whitepapers">Whitepapers</Link>
									</li>
									<li>
										<Link href="/faq">FAQs</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget widget-contact wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Our Office</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span>Kochi, Kerala, India</span>
									</div>
									<div className="contact-item">
										<Link href="tel:+919876543210">P: +91 XXXXXXXXXX</Link>
										<Link href="mailto:info@pydart.in">
											M: info@pydart.in
										</Link>
									</div>
									<div className="contact-item">
										<span>
											<i className="tji-clock"></i> Mon-Fri 9am-6pm
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-marquee">
				<MarqueeSlider1 />
			</div>
			<div className="tj-copyright-area-2">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										&copy; 2025 
										<Link
											href="/"
										>
											Pydart Intelli Corp Pvt. Ltd.
										</Link>{" "}
										All rights reserved
									</p>
								</div>
								<div className="social-links style-3">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/contact">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/terms-and-conditions">
												Terms & Condition
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default Footer2;
