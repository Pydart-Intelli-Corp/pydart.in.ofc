"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const ServicesGridPydart = () => {
    const pillars = [
        {
            id: "mechanical-robotics-platform",
            iconName: "tji-service-1",
            title: "Mechanical Robotics Platform",
            shortDesc:
                "Precision-engineered motion systems designed for reliability, load handling and safe physical interaction with humans.",
        },
        {
            id: "motion-control-systems",
            iconName: "tji-service-2",
            title: "Motion Control Systems",
            shortDesc:
                "Advanced control architectures synchronize mechanical movement with safety systems and operational commands in real time.",
        },
        {
            id: "artificial-intelligence-layer",
            iconName: "tji-service-3",
            title: "Artificial Intelligence Layer",
            shortDesc:
                "AI algorithms enable intelligent monitoring, predictive safety functions and continuous system optimization.",
        },
        {
            id: "monitoring-data-integration",
            iconName: "tji-service-4",
            title: "Monitoring & Data Integration",
            shortDesc:
                "Real-time monitoring provides operational insights, diagnostics and seamless integration with digital infrastructure.",
        },
    ];

    return (
        <section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="content-wrap  slidebar-stickiy">
                            <div className="sec-heading style-2">
                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                    Technology Approach
                                </span>
                                <h2 className="sec-title text-white text-anim">
                                    A Layered Robotics
                                    <span style={{ color: 'var(--tj-color-theme-primary)' }}> Engineering Architecture.</span>
                                </h2>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay=".6s">
                                <ButtonPrimary text={"Explore the Technology"} url={"/technology"} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="service-wrapper-2">
                            {pillars.map((pillar, idx) => (
                                <div key={idx} className="service-item-wrapper tj-fadein-right-on-scroll">
                                    <div className="service-item style-2 ">
                                        <div className="title-area">
                                            <div className="service-icon">
                                                <i className={pillar.iconName}></i>
                                            </div>
                                            <h4 className="title">
                                                <Link href="/technology">{pillar.title}</Link>
                                            </h4>
                                        </div>
                                        <div className="service-content">
                                            <p className="desc">{pillar.shortDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
            <div className="bg-shape-3">
                <img src="/images/shape/shape-blur.svg" alt="" />
            </div>
        </section>
    );
};

export default ServicesGridPydart;
