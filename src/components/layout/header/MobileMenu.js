import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const handleClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div
                className={`body-overlay  ${isMobileMenuOpen ? "opened" : ""}`}
                onClick={handleClick}
            ></div>
            <div
                className={`hamburger-area d-lg-none ${
                    isMobileMenuOpen ? "opened" : ""
                }`}
            >
                <div className="hamburger_bg"></div>
                <div className="hamburger_wrapper">
                    <div className="hamburger_inner">
                        <div className="hamburger_top d-flex align-items-center justify-content-between">
                            <div className="hamburger_logo">
                                <Link href="/" className="mobile_logo">
                                    <img src="/logo/pydart_logo.png" alt="PyDart Logo" />
                                </Link>
                            </div>
                            <div className="hamburger_close">
                                <button className="hamburger_close_btn" onClick={handleClick}>
                                    <i className="fa-thin fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <MobileNavbar />
                        <div className="hamburger-infos">
                            <h5 className="hamburger-title">Contact Info</h5>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="subtitle">Phone</span>
                                    <Link className="contact-link" href="tel:+917356765036">
                                        +91 7356765036
                                    </Link>
                                </div>
                                <div className="contact-item">
                                    <span className="subtitle">Email</span>
                                    <a className="contact-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40pydart.com" target="_blank" rel="noopener noreferrer">
                                        Info@pydart.com
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <span className="subtitle">Location</span>
                                    <span className="contact-link">
                                        Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, HMT Colony, P.O, Kalamassery, Kochi, Kerala 683503
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-socials">
                        <h5 className="hamburger-title">Follow Us</h5>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
