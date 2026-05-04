"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSliderPydart = () => {
    const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
    const heroSlides = [
        {
            subtitle: "Robotics · Artificial Intelligence · Intelligent Automation",
            title: (
                <>
                    Robotics Built for <span>Real-World Impact.</span>
                </>
            ),
            desc: "Pydart Intellicorp is a deep-technology robotics company developing intelligent automated systems that combine mechanical engineering, artificial intelligence and real-world operational intelligence to enhance safety, efficiency and operational intelligence across critical environments.",
            img: "/images/hero/robotics.webp",
            thumbImg: "/images/hero/robotics.webp",
        },
        {
            subtitle: "First Deployment Platform",
            title: (
                <>
                    Introducing <span>ALTRAS-1.</span>
                </>
            ),
            desc: "An AI-enabled robotic patient transfer platform designed to eliminate manual lifting and bring intelligent automation into hospital patient mobility operations.",
            img: "/images/hero/hospital.webp",
            thumbImg: "/images/hero/hospital.webp",
        },
        {
            subtitle: "A Layered Robotics Architecture",
            title: (
                <>
                    Engineering the Next Generation of <span>Intelligent Systems.</span>
                </>
            ),
            desc: "Precision mechanics, real-time control, AI-enabled monitoring and data integration — unified into modular robotic platforms that scale across healthcare, infrastructure and industry.",
            img: "/images/hero/ai-img.webp",
            thumbImg: "/images/hero/ai-img.webp",
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
                                        <ButtonPrimary text={"Explore ALTRAS-1"} url={"/product/altras-1"} className="btn-secondary" />
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
                onSwiper={setControlledMainSwiper}
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
                <Link className="circle-icon" href="/technology">
                    <i className="tji-arrow-down-big"></i>
                </Link>
            </div>
        </section>
    );
};

export default HeroSliderPydart;
