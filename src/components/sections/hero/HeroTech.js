"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const HeroTech = () => {
    return (
        <section className="tj-slider-section">
            {/* Single hero panel — video background instead of Swiper slides */}
            <div className="tj-slider-item">
                {/* Video background — same role as .slider-bg-image in HeroSlider */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                    }}
                >
                    <source src="/video/technology.mp4" type="video/mp4" />
                </video>

                {/* Text content — same layout as HeroSlider slide content */}
                <div className="container">
                    <div className="slider-wrapper">
                        <div className="slider-content">
                            <span className="slider-subtitle">
                                Pydart Robotics Technology Stack
                            </span>
                            <h1 className="slider-title">
                                Integrated Robotics <span>Engineering Framework.</span>
                            </h1>
                            <div className="slider-desc">
                                Pydart develops robotic systems through an integrated technology
                                stack that combines hardware engineering with intelligent automation.
                            </div>
                            <div className="slider-btn">
                                <ButtonPrimary
                                    text={"Explore Our Tech Stack"}
                                    url={"#stack"}
                                    className="btn-secondary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator — same as HeroSlider */}
            <div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
                <span
                    className="circle-text"
                    style={{ backgroundImage: "url('/images/hero/circle-text.webp')" }}
                ></span>
                <Link className="circle-icon" href="/services">
                    <i className="tji-arrow-down-big"></i>
                </Link>
            </div>
        </section>
    );
};

export default HeroTech;
