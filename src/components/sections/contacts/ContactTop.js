import Link from "next/link";

const ContactTop = () => {
    return (
        <div className="tj-contact-area section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading text-center">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                                <i className="tji-box"></i>Contact info
                            </span>
                            <h2 className="sec-title title-anim">
                                <span>Reach</span> Out to Us
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row row-gap-4 justify-content-center align-items-stretch">
                    <div className="col-xl-4 col-lg-6 col-sm-6 d-flex">
                        <div
                            className="contact-item style-2 wow fadeInUp w-100"
                            data-wow-delay=".3s"
                        >
                            <div className="contact-icon">
                                <i className="tji-location-3"></i>
                            </div>
                            <h3 className="contact-title">Our Location</h3>
                            <p>Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, HMT Colony, P.O, Kalamassery, Kochi, Kerala 683503</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6 d-flex">
                        <div
                            className="contact-item style-2 wow fadeInUp w-100"
                            data-wow-delay=".5s"
                        >
                            <div className="contact-icon">
                                <i className="tji-envelop"></i>
                            </div>
                            <h3 className="contact-title">Email us</h3>
                            <ul className="contact-list">
                                <li>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40pydart.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        info@pydart.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6 d-flex">
                        <div
                            className="contact-item style-2 wow fadeInUp w-100"
                            data-wow-delay=".7s"
                        >
                            <div className="contact-icon">
                                <i className="tji-phone"></i>
                            </div>
                            <h3 className="contact-title">Call us</h3>
                            <ul className="contact-list">
                                <li>
                                    <Link href="tel:7356765036">7356765036</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactTop;
