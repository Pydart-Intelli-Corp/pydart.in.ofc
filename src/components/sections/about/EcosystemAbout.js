import Image from "next/image";

const EcosystemAbout = () => {
    const phases = [
        {
            icon: "tji-service-1",
            tag: "Phase 01",
            title: "ALTRAS-1",
            desc: "Automated patient transfer robotics introducing intelligent automation into hospital mobility and safer clinical workflows.",
            img: "/images/hero/altras-transfer-hero.webp",
            delay: ".3s",
        },
        {
            icon: "tji-service-2",
            tag: "Phase 02",
            title: "ALTRAS-Assist Systems",
            desc: "AI-assisted hospital mobility robotics extending the ALTRAS platform into broader patient support and assisted care operations.",
            img: "/images/hero/robotics.webp",
            delay: ".45s",
        },
        {
            icon: "tji-service-3",
            tag: "Phase 03",
            title: "Autonomous Hospital Robotics",
            desc: "Smart robotic assistance for ICU logistics and patient support, enabled by autonomous navigation and intelligent decisioning.",
            img: "/images/hero/ai-img.webp",
            delay: ".6s",
        },
        {
            icon: "tji-service-4",
            tag: "Phase 04",
            title: "Intelligent Hospital Infrastructure",
            desc: "Integrated robotic automation systems supporting end-to-end hospital operations and data-driven patient care infrastructure.",
            img: "/images/hero/hospital.webp",
            delay: ".75s",
        },
    ];

    return (
        <section className="tj-service-section service-2 section-gap section-gap-x">
            <div className="container">
                <div className="row align-items-end row-gap-4">
                    <div className="col-lg-7">
                        <div className="sec-heading style-2">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                                Future Robotics Ecosystem
                            </span>
                            <h2 className="sec-title text-white text-anim">
                                A Long-Term Vision for{" "}
                                <span style={{ color: "var(--tj-color-theme-primary)" }}>
                                    Intelligent Robotics
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="wow fadeInUp" data-wow-delay=".35s">
                            <p
                                style={{
                                    color: "rgba(255,255,255,0.72)",
                                    marginBottom: "0",
                                    lineHeight: "1.85",
                                }}
                            >
                                ALTRAS-1 is the first platform within a broader ecosystem being developed
                                by Pydart, moving from patient transfer robotics toward fully integrated,
                                intelligent hospital infrastructure.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row altras-caps-heading">
                    <div className="col-12">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                            Development Roadmap
                        </span>
                    </div>
                </div>

                <div className="row row-gap-4">
                    {phases.map((phase, idx) => (
                        <div key={idx} className="col-lg-6 col-md-6">
                            <div
                                className="altras-cap-card wow fadeInUp"
                                data-wow-delay={phase.delay}
                            >
                                <Image
                                    src={phase.img}
                                    alt={phase.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="altras-cap-overlay" />
                                <div className="altras-cap-content">
                                    <div className="altras-cap-icon">
                                        <i className={phase.icon}></i>
                                    </div>
                                    <span
                                        style={{
                                            color: "var(--tj-color-theme-primary)",
                                            display: "block",
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            marginBottom: "0.7rem",
                                        }}
                                    >
                                        {phase.tag}
                                    </span>
                                    <h4 className="altras-cap-title">{phase.title}</h4>
                                    <p className="altras-cap-desc">{phase.desc}</p>
                                </div>
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
            <div className="bg-shape-3">
                <img src="/images/shape/shape-blur.svg" alt="" />
            </div>
        </section>
    );
};

export default EcosystemAbout;