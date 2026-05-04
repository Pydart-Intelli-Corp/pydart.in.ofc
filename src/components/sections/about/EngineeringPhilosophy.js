const EngineeringPhilosophy = () => {
    const pillars = [
        {
            icon: "tji-service-1",
            step: "01",
            title: "Advanced Robotics Engineering",
            desc: "Precision-engineered motion systems designed for reliability, load handling, and safe physical interaction in real-world environments.",
        },
        {
            icon: "tji-service-2",
            step: "02",
            title: "Intelligent Automation Systems",
            desc: "Advanced control architectures that synchronize mechanical movement with safety systems and operational commands seamlessly.",
        },
        {
            icon: "tji-service-3",
            step: "03",
            title: "AI-Enabled Decision Support",
            desc: "AI algorithms enabling intelligent monitoring, predictive safety functions, and continuous system optimization across operations.",
        },
        {
            icon: "tji-service-4",
            step: "04",
            title: "Real-Time Monitoring & Data Integration",
            desc: "Real-time monitoring systems delivering operational insights, diagnostics, and seamless digital infrastructure integration.",
        },
    ];

    return (
        <section className="tj-choose-section section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                Engineering Philosophy
                            </span>
                            <div className="heading-wrap-content">
                                <div className="sec-heading">
                                    <h2 className="sec-title wow fadeInUp" data-wow-delay=".4s">
                                        Our Approach to{" "}
                                        <span>Intelligent Robotics.</span>
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                                    Pydart's engineering philosophy combines four core pillars that form
                                    the foundation of every intelligent robotic system we build — from
                                    mechanical design through to data-driven intelligence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-gap-4 rightSwipeWrap">
                    {pillars.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="col-lg-3 col-md-6"
                        >
                            <div
                                className="choose-box right-swipe wow fadeInUp"
                                data-wow-delay={`${0.2 + idx * 0.15}s`}
                            >
                                <div className="choose-content">
                                    <div className="choose-icon">
                                        <i className={pillar.icon}></i>
                                    </div>
                                    <span
                                        style={{
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            color: "var(--tj-color-theme-primary)",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        {pillar.step}
                                    </span>
                                    <h4 className="title">{pillar.title}</h4>
                                    <p className="desc">{pillar.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeringPhilosophy;
