import Image from "next/image";
const AboutCompany = ({ type }) => {
    return (
        <section id="about-pydart" className="tj-about-section-2 section-gap section-gap-x" style={{ scrollMarginTop: "120px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                        <div
                            className="about-img-area style-2 wow fadeInLeft"
                            data-wow-delay=".3s"
                        >
                            <div className="about-img overflow-hidden">
                                <Image
                                    data-speed=".8"
                                    src="/images/about/about-5.webp"
                                    alt=""
                                    width={591}
                                    height={639}
                                />
                            </div>
                            <div className={`box-area ${type === 2 ? "style-2" : ""}`}>
                                <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                                <h4 className="title">Impact Metrics</h4>
                                <ul className="tj-progress-list">
                                    <li>
                                        <h6 className="tj-progress-title">Injury Reduction</h6>
                                            <div className="tj-progress">
                                                <span className="tj-progress-percent">82%</span>
                                                <div
                                                    className="tj-progress-bar"
                                                    data-percent="82"
                                                ></div>
                                            </div>
                                        </li>
                                        <li>
                                        <h6 className="tj-progress-title">Safety Record</h6>
                                            <div className="tj-progress">
                                                <span className="tj-progress-percent">90%</span>
                                                <div
                                                    className="tj-progress-bar"
                                                    data-percent="90"
                                                ></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                        <div className="about-content-area">
                            <div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                    <i className="tji-box"></i>About Pydart
                                </span>
                                <h2 className="sec-title title-anim">
                                    {type === 2 ? (
                                        <>
                                            Engineering the Future of <span>Compassionate Care</span>
                                        </>
                                    ) : (
                                        "Engineering the Future of Compassionate Care"
                                    )}
                                </h2>
                            </div>
                        </div>
                        <div className="about-bottom-area" id="mission" style={{ scrollMarginTop: "120px" }}>
                            <div
                                className="mission-vision-box wow fadeInLeft"
                                data-wow-delay=".5s"
                            >
                                <h4 className="title">Our Mission</h4>
                                <p className="desc">
                                    To design intelligent robotic systems that enhance human capability, improve safety, and enable efficient automation across critical environments.
                                </p>
                            </div>
                            <div
                                className="mission-vision-box wow fadeInRight"
                                data-wow-delay=".5s"
                            >
                                <h4 className="title">Our Vision</h4>
                                <p className="desc">
                                    To build a future where intelligent robotic systems support human work across healthcare, infrastructure, and industry. Pydart aims to create scalable robotics platforms that combine automation, artificial intelligence, and system integration to transform complex operational environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-gap-4" style={{ marginTop: "60px" }}>
                    <div className="col-lg-6 col-sm-12 order-1">
                        <div
                            className="about-content-area-2 wow fadeInUp"
                            data-wow-delay=".1s"
                        >
                            <div className="about-content">
                                <div className="sec-heading style-2">
                                    <h2 className="sec-title title-highlight">
                                        A Deep-Technology Robotics Company
                                    </h2>
                                    <p>
                                        Pydart Intellicorp builds intelligent automated systems that combine mechanical engineering, artificial intelligence and real-world operational intelligence. Our integrated robotic platforms are designed to assist human workflows, improve safety, and enable scalable automation across industries — practical, reliable and accessible for real-world deployment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-2">
                        <div
                            className="customers-box style-2 wow fadeInUp"
                            data-wow-delay=".2s"
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
                                Building the next generation of intelligent robotic infrastructure with trusted partners.
                            </h6>
                            <div className="star-icon zoomInOut">
                                <img src="/images/shape/star.svg" alt="" />
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
        </section>
    );
};

export default AboutCompany;
