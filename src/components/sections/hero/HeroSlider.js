"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroSlider = () => {
    const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
    const heroSlides = [
        {
            subtitle: "Transforming Patient Care Through Robotics",
            title: (
                <>
                    Zero Relative Velocity for <span>Patient Care.</span>
                </>
            ),
            desc: "ALTRAS-1 is an AI-powered robotic patient transfer system designed to eliminate manual lifting, reduce caregiver injuries, and ensure dignified, frictionless patient movement across hospital environments.",
            img: "/images/hero/altras-zrv-hero.webp",
            thumbImg: "/images/hero/altras-zrv-hero.webp",
        },
        {
            subtitle: "Automated Patient Transfer",
            title: (
                <>
                    Eliminating Manual <span>Lifting.</span>
                </>
            ),
            desc: "Robotic lateral transfer eliminates friction, shear forces, and physical strain while ensuring patient dignity and safety.",
            img: "/images/hero/altras-transfer-hero.webp",
            thumbImg: "/images/hero/altras-transfer-hero.webp",
        },
        {
            subtitle: "AI-Powered Safety",
            title: (
                <>
                    Built for Zero-Failure <span>Healthcare.</span>
                </>
            ),
            desc: "Safety is embedded into every mechanical, electrical, and software layer of ALTRAS-1 with continuous monitoring and AI-based alignment.",
            img: "/images/hero/altras-safety-hero.webp",
            thumbImg: "/images/hero/altras-safety-hero.webp",
        },
    ];
    return (
        <section className="tj-slider-section">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                effect="fade"
                speed={1400}
                autoplay={{ delay: 5000 }}
                modules={[Autoplay, Navigation, EffectFade, Thumbs]}
                thumbs={{ swiper: controlledMainSwiper }}
                navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
                className="hero-slider"
                style={{ height: "100%" }}
            >
                {heroSlides.map(({ img, title, desc }, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="tj-slider-item"
                        style={{ height: "auto" }}
                    >
                        <div
                            className="slider-bg-image"
                            style={{
                                backgroundImage: `url('${
                                    img ? img : "/images/hero/slider-1.webp"
                                }')`,
                            }}
                        ></div>
                        <div className="container">
                            <div className="slider-wrapper">
                                <div className="slider-content">
                                    <span className="slider-subtitle">{heroSlides[idx].subtitle}</span>
                                    <h1 className="slider-title">{title}</h1>
                                    <div className="slider-desc">{desc}</div>
                                    <div className="slider-btn">
                                        <ButtonPrimary text={"How ALTRAS-1 Works"} url={"/how-it-works"} className="btn-secondary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div
                    className="hero-navigation d-inline-flex wow fadeIn"
                    data-wow-delay="1.5s"
                >
                    <div className="slider-prev" role="button">
                        <span className="anim-icon">
                            <i className="tji-arrow-left"></i>
                            <i className="tji-arrow-left"></i>
                        </span>
                    </div>
                    <div className="slider-next" role="button">
                        <span className="anim-icon">
                            <i className="tji-arrow-right"></i>
                            <i className="tji-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </Swiper>
            <Swiper
                onSwiper={setControlledMainSwiper} // capture thumbs swiper
                slidesPerView={3}
                spaceBetween={15}
                loop={false}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="hero-thumb wow fadeIn"
                data-wow-delay="2s"
            >
                {heroSlides.map(
                    ({ thumbImg = "/images/hero/slider-thumb-1.webp" }, idx) => (
                        <SwiperSlide key={idx} className="thumb-item">
                            <Image
                                src={thumbImg}
                                alt="images"
                                width={80}
                                height={80}
                                style={{ height: "auto" }}
                            />
                        </SwiperSlide>
                    )
                )}
            </Swiper>

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

export default HeroSlider;
