const EcosystemPydart = ({ hideMissionVision, largeCards }) => {
    const phases = [
        {
            icon: "tji-service-1",
            tag: "Phase 01",
            title: "ALTRAS-1",
            desc: "Automated patient transfer robotics — our first deployment platform introducing intelligent automation into hospital mobility.",
        },
        {
            icon: "tji-service-2",
            tag: "Phase 02",
            title: "ALTRAS-Assist Systems",
            desc: "AI-assisted hospital mobility robotics extending the ALTRAS platform across broader patient support workflows.",
        },
        {
            icon: "tji-service-3",
            tag: "Phase 03",
            title: "Autonomous Hospital Robotics",
            desc: "Smart robotic assistance for ICU logistics and patient support, enabled by autonomous navigation and intelligent decisioning.",
        },
        {
            icon: "tji-service-4",
            tag: "Phase 04",
            title: "Intelligent Hospital Infrastructure",
            desc: "Integrated robotic automation systems supporting end-to-end hospital operations and data-driven patient care.",
        },
    ];

    return (
        <section
            id="ecosystem"
            className="tj-working-process section-gap section-gap-x"
            style={{ scrollMarginTop: "120px" }}
        >
            <div className="container">

                {/* ── Section Header ── */}
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                Future Robotics Ecosystem
                            </span>
                            <div className="heading-wrap-content">
                                <div className="sec-heading style-2">
                                    <h2 className="sec-title text-anim">
                                        A Long-Term Vision for{" "}
                                        <span style={{ color: "var(--tj-color-theme-primary)" }}>
                                            Intelligent Robotics.
                                        </span>
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                                    ALTRAS-1 is the first platform within a broader ecosystem being developed
                                    by Pydart — a phased roadmap from patient transfer robotics to fully
                                    integrated, intelligent hospital infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Mission & Vision Cards ── */}
                {!hideMissionVision && (
                    <div className="row g-4 eco-mv-row">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="eco-mv-card">
                                <span className="eco-mv-label">Our Mission</span>
                                <p className="eco-mv-text">
                                    To design intelligent robotic systems that enhance human capability,
                                    improve safety, and enable efficient automation across critical environments.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="eco-mv-card">
                                <span className="eco-mv-label">Our Vision</span>
                                <p className="eco-mv-text">
                                    To build a future where intelligent robotic systems support human work
                                    across healthcare, infrastructure, and industry. Pydart aims to create
                                    scalable robotics platforms that combine automation, artificial intelligence,
                                    and system integration to transform complex operational environments.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Roadmap Divider ── */}
                <div className="eco-roadmap-divider wow fadeInUp" data-wow-delay=".3s">
                    <span>Development Roadmap</span>
                </div>

                {/* ── Roadmap Phase Cards ── */}
                <div className="row g-4 eco-phase-row">
                    {phases.map((phase, idx) => (
                        <div
                            key={idx}
                            className={`${largeCards ? "col-lg-6" : "col-lg-3"} col-md-6 wow fadeInUp`}
                            data-wow-delay={`${0.2 + idx * 0.15}s`}
                        >
                            <div className="eco-phase-card">
                                <div className="eco-phase-icon">
                                    <i className={phase.icon}></i>
                                </div>
                                <span className="eco-phase-tag">{phase.tag}</span>
                                <h4 className="eco-phase-title">{phase.title}</h4>
                                <p className="eco-phase-desc">{phase.desc}</p>
                                <div className="eco-phase-glow"></div>
                            </div>
                        </div>
                    ))}
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

export default EcosystemPydart;
