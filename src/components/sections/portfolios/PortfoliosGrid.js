"use client";
import PortfolioCard2 from "@/components/shared/cards/PortfolioCard2";
import getPortfolio from "@/utils/getPortfolio";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const PortfoliosGrid = () => {
    const portfolioTShow = getPortfolio()?.slice(0, 3);
    const portfolio = [...portfolioTShow, ...portfolioTShow];

    return null; // Section hidden

    /* Hidden section
    return (
        <section className="tj-project-section-2 section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading style-2 text-center">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                Product Highlight
                            </span>
                            <h2 className="sec-title text-anim">
                                Meet <span>ALTRAS-1</span>
                            </h2>
                            <p className="text-center">ALTRAS-1 is a smart robotic stretcher engineered for ICU, OT, emergency, and ward environments. It enables safe, single-operator transfers for bariatric and non-bariatric patients.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
                            <Swiper
                                slidesPerView={1.2}
                                spaceBetween={15}
                                loop={true}
                                speed={1500}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 6000,
                                }}
                                pagination={{
                                    el: ".swiper-pagination-area",
                                    clickable: true,
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 1.7,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 30,
                                    },
                                    1400: {
                                        slidesPerView: 2.31,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Pagination, Autoplay]}
                                className="project-slider"
                            >
                                {portfolio?.length
                                    ? portfolio?.map((portfolio, idx) => (
                                            <SwiperSlide key={idx}>
                                                <PortfolioCard2 portfolio={portfolio} />
                                            </SwiperSlide>
                                      ))
                                    : ""}
                                <div className="swiper-pagination-area"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); */
};

export default PortfoliosGrid;
