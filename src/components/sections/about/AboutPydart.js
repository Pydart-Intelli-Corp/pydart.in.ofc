import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const AboutPydart = ({ hideStats, isHomePage }) => {
    return (
        <section className="tj-about-section section-gap">
            <div className="container">
                <div className="row row-gap-4">
                    <div className="col-lg-6 col-sm-12 order-1">
                        <div
                            className="about-content-area-2 wow fadeInUp"
                            data-wow-delay=".1s"
                        >
                            <div className="about-content">
                                <div className="sec-heading style-2">
                                    <span className="sub-title">About Pydart</span>
                                    <h2 className="sec-title title-highlight">
                                        A Deep-Technology Robotics Company
                                    </h2>
                                    <p>
                                        Pydart Intellicorp builds intelligent automated systems that combine mechanical engineering, artificial intelligence and real-world operational intelligence. Our integrated robotic platforms are designed to assist human workflows, improve safety, and enable scalable automation across industries — practical, reliable and accessible for real-world deployment.
                                    </p>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay=".3s">
                                    <ButtonPrimary
                                        text={"Learn more about Pydart"}
                                        url={"/about"}
                                        isTextBtn={true}
                                    />
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
                                style={{ backgroundImage: `url('${isHomePage ? '/images/about/mix.webp' : '/images/about/about-4.webp'}')` }}
                            ></div>
                            {!isHomePage && (
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
                            )}
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
                    {!hideStats && (
                        <>
                            <div className="col-lg-4 col-md-6 order-3">
                                <div
                                    className="countup-item style-2 wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <span className="count-icon">
                                        <i className="tji-complete"></i>
                                    </span>
                                    <span className="steps">01.</span>
                                    <div className="count-inner">
                                        <span className="count-text">Engineering Layers</span>
                                        <FunfactSingle currentValue={4} symbol="" />
                                        <span
                                            className="source-link"
                                            style={{ fontSize: '11px', color: 'var(--tj-color-theme-primary)', display: 'block', marginTop: '5px' }}
                                        >
                                            Mechanics · Control · AI · Data
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 order-4">
                                <div
                                    className="countup-item style-2 wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <span className="count-icon">
                                        <i className="tji-worldwide"></i>
                                    </span>
                                    <span className="steps">02.</span>
                                    <div className="count-inner">
                                        <span className="count-text">First Deployment Platform</span>
                                        <FunfactSingle currentValue={1} symbol=" · ALTRAS" />
                                        <span
                                            className="source-link"
                                            style={{ fontSize: '11px', color: 'var(--tj-color-theme-primary)', display: 'block', marginTop: '5px' }}
                                        >
                                            Healthcare robotics
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 order-5">
                                <div
                                    className="countup-item style-2 wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <span className="count-icon">
                                        <i className="tji-growth"></i>
                                    </span>
                                    <span className="steps">03.</span>
                                    <div className="count-inner">
                                        <span className="count-text">Ecosystem Phases</span>
                                        <FunfactSingle currentValue={4} symbol="" />
                                        <span
                                            className="source-link"
                                            style={{ fontSize: '11px', color: 'var(--tj-color-theme-primary)', display: 'block', marginTop: '5px' }}
                                        >
                                            Transfer → Assist → Autonomy → Infra
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutPydart;
