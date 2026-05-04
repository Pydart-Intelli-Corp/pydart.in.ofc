"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const HeroAbout = () => {
    return (
        <section className="tj-slider-section">
            {/* Video background */}
            <div className="tj-slider-item">
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
                    <source src="/video/about-main.mp4" type="video/mp4" />
                </video>

                {/* Text content */}
                <div className="container">
                    <div className="slider-wrapper">
                        <div className="slider-content">
                            <span className="slider-subtitle">
                                About Pydart Intellicorp
                            </span>
                            <h1 className="slider-title">
                                Engineering the Future of{" "}
                                <span>Compassionate Care.</span>
                            </h1>
                            <div className="slider-desc">
                                A deep-technology robotics company building intelligent automated
                                systems that combine mechanical engineering, artificial intelligence,
                                and real-world operational intelligence.
                            </div>
                            <div className="slider-btn">
                                <ButtonPrimary
                                    text={"Explore What We Do"}
                                    url={"#about-pydart"}
                                    className="btn-secondary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default HeroAbout;
