"use client";
import Link from "next/link";

const FooterBasic = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        if (!email) return;
        const subject = encodeURIComponent("Newsletter Subscription from Pydart Website");
        const body = encodeURIComponent(`Hello,\n\nPlease subscribe me to the Pydart newsletter.\n\nMy email: ${email}\n\nThank you.`);
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=info%40pydart.com&su=${subject}&body=${body}`,
            "_blank",
            "noopener,noreferrer"
        );
    };
    return (
        <footer className="tj-footer-section footer-1 section-gap-x">
            <div className="footer-main-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
                                <div className="footer-logo">
                                    <Link href="/">
                                        <img src="/logo/pydart_logo.png" alt="PyDart Logo" />
                                    </Link>
                                </div>
                                <div className="footer-text">
                                    <p>
                                        Developing personalze our customer journeys to increase
                                        satisfaction & loyalty of our expansion.
                                    </p>
                                </div>
                                <div className="award-logo-area">
                                    <div className="award-logo">
                                        <img src="/images/footer/award-logo-1.webp" alt="" />
                                    </div>
                                    <div className="award-logo">
                                        <img src="/images/footer/award-logo-2.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div
                                className="footer-widget widget-nav-menu wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h5 className="title">Explore</h5>
                                <ul>
                                    <li>
                                        <Link href="/product/altras-1">ALTRAS-1 Overview</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/technology">Technology</Link>
                                    </li>
                                    <li>
                                        <Link href="/safety">Safety &amp; Compliance</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About Pydart</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs">Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div
                                className="footer-widget widget-nav-menu wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h5 className="title">Resources</h5>
                                <ul>
                                    <li>
                                        <Link href="/contact">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                <li>
                                    <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div
                                className="footer-widget widget-subscribe wow fadeInUp"
                                data-wow-delay=".7s"
                            >
                                <h3 className="title">Subscribe to Our Newsletter.</h3>
                                <div className="subscribe-form">
                                    <form onSubmit={handleSubscribe}>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            required
                                        />
                                        <button type="submit">
                                            <i className="tji-plane"></i>
                                        </button>
                                        <label htmlFor="agree">
                                            <input id="agree" type="checkbox" />
                                            Agree to our{" "}
                                            <Link href="/terms-and-conditions">
                                                Terms & Condition?
                                            </Link>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tj-copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-content-area">
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <Link href="tel:+917356765036">
                                                <span className="icon">
                                                    <i className="tji-phone-2"></i>
                                                </span>
                                                <span className="text">+91 7356765036</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40pydart.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="icon">
                                                    <i className="tji-envelop-2"></i>
                                                </span>
                                                <span className="text">Info@pydart.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="social-links">
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
                                <div className="copyright-text">
                                    <p>
                                        &copy; 2026 
                                        <Link
                                            href="https://themeforest.net/user/theme-junction/portfolio"
                                            target="_blank"
                                        >
                                            Pydart Intelli Corp Pvt. Ltd.
                                        </Link>{" "}
                                        All rights reserved
                                    </p>
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

export default FooterBasic;
