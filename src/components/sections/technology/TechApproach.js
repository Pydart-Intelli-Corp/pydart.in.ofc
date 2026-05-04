import makeWowDelay from "@/utils/makeWowDelay";

const layers = [
    {
        number: "01",
        icon: "tji-service-1",
        title: "Mechanical Robotics Platform",
        desc: "Precision-engineered motion systems designed for reliability, load handling, and safe physical interaction across real operational environments.",
    },
    {
        number: "02",
        icon: "tji-service-2",
        title: "Motion Control Systems",
        desc: "Advanced control architectures synchronize mechanical movement with safety systems and operational commands in real time.",
    },
    {
        number: "03",
        icon: "tji-service-3",
        title: "Artificial Intelligence Layer",
        desc: "AI algorithms enable intelligent monitoring, predictive safety functions, and continuous system optimization at the edge.",
    },
    {
        number: "04",
        icon: "tji-service-4",
        title: "Monitoring & Data Integration",
        desc: "Real-time monitoring systems provide operational insights, diagnostics, and seamless integration with digital infrastructure.",
    },
];

const TechApproach = () => {
    return (
        <section
            id="technology-approach"
            className="tj-choose-section section-gap section-gap-x"
            style={{ scrollMarginTop: "120px" }}
        >
            <div className="container">

                {/* Section Header */}
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
                            <span
                                className="sub-title wow fadeInUp"
                                data-wow-delay=".3s"
                                style={{ color: 'var(--tj-color-heading-primary)', display: 'inline-flex' }}
                            >
                                <i className="tji-box"></i>Engineering Architecture
                            </span>
                            <div className="heading-wrap-content" style={{ alignItems: 'flex-start' }}>
                                <div style={{ maxWidth: '500px' }}>
                                    <h2
                                        className="sec-title text-anim"
                                        style={{ color: 'var(--tj-color-heading-primary)', marginBottom: 0 }}
                                    >
                                        Pydart Technology <span style={{ color: 'var(--tj-color-theme-primary)' }}>Approach.</span>
                                    </h2>
                                </div>
                                <p
                                    className="desc wow fadeInUp"
                                    data-wow-delay=".5s"
                                    style={{ color: 'var(--tj-color-text-body)', maxWidth: '420px' }}
                                >
                                    Pydart develops robotic systems through a layered engineering architecture that integrates
                                    physical robotics with intelligent software systems — enabling modular platforms capable
                                    of evolving across multiple industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer Cards */}
                <div className="row row-gap-4 rightSwipeWrap" style={{ marginTop: "40px" }}>
                    {layers.map((layer, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6">
                            <div
                                className="choose-box right-swipe"
                                style={{ height: "100%" }}
                            >
                                <div className="choose-content">
                                    <div className="choose-icon">
                                        <i className={layer.icon}></i>
                                    </div>
                                    <div
                                        className="wow fadeInUp"
                                        data-wow-delay={makeWowDelay(idx, 0.3)}
                                        style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "700",
                                                color: "var(--tj-color-theme-primary)",
                                                letterSpacing: "1px",
                                            }}
                                        >
                                            LAYER {layer.number}
                                        </span>
                                    </div>
                                    <h4 className="title">{layer.title}</h4>
                                    <p className="desc">{layer.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Architecture note */}
                <div className="row" style={{ marginTop: "32px" }}>
                    <div className="col-12 text-center">
                        <p
                            className="wow fadeInUp"
                            data-wow-delay=".3s"
                            style={{
                                color: "var(--tj-color-theme-primary)",
                                fontWeight: "600",
                                fontSize: "15px",
                            }}
                        >
                            This layered architecture allows Pydart to develop modular robotic platforms capable of evolving across multiple industries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechApproach;
