import Image from "next/image";
import makeWowDelay from "@/utils/makeWowDelay";

const stackLayers = [
    {
        label: "Application Layer",
        items: [
            "Healthcare robotics platforms",
            "Hospital automation systems",
            "Patient mobility solutions",
        ],
        icon: "tji-service-1",
        color: "#7b5ea7",
        img: "/images/technology/Application Layer.webp",
    },
    {
        label: "Intelligence Layer",
        items: [
            "AI safety algorithms",
            "Motion optimization",
            "System diagnostics",
            "Predictive monitoring",
        ],
        icon: "tji-innovative",
        color: "#5e8fd4",
        img: "/images/technology/Intelligence Layer.webp",
    },
    {
        label: "Control System Layer",
        items: [
            "Embedded controllers",
            "Actuator control",
            "Sensor integration",
            "Safety control systems",
        ],
        icon: "tji-service-3",
        color: "#4caf9e",
        img: "/images/technology/Control System Layer.webp",
    },
    {
        label: "Robotic Hardware Layer",
        items: [
            "Linear actuators",
            "Electric motors",
            "Mechanical motion systems",
            "Structural engineering",
        ],
        icon: "tji-service-2",
        color: "#e07b54",
        img: "/images/technology/Robotic Hardware Layer.webp",
    },
    {
        label: "Physical Interaction Layer",
        items: [
            "Patient transfer platform",
            "Load distribution system",
            "Motion rails & support frame",
        ],
        icon: "tji-award",
        color: "#c05c5c",
        img: "/images/technology/Physical Interaction Layer.webp",
    },
];

const TechStack = () => {
    return (
        <section id="stack" className="tj-working-process section-gap section-gap-x" style={{ background: "var(--tj-color-bg-2, #f8f9fc)", scrollMarginTop: "120px" }}>
            <div className="container">

                {/* Section Header */}
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className="tji-box"></i>Integrated Engineering Framework
                            </span>
                            <div className="heading-wrap-content">
                                <div className="sec-heading style-2">
                                    <h2 className="sec-title text-anim">
                                        Pydart Robotics <span>Technology Stack.</span>
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                                    Pydart develops robotic systems through an integrated technology stack that combines
                                    hardware engineering with intelligent automation — five layers working in unison from
                                    physical interaction to application intelligence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stack Layers */}
                <div className="row g-4" style={{ marginTop: "8px" }}>
                    {stackLayers.map((layer, idx) => (
                        <div
                            key={idx}
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay={makeWowDelay(idx, 0.2)}
                        >
                            <div className="altras-cap-card">
                                <Image
                                    src={layer.img}
                                    alt={layer.label}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="altras-cap-overlay" />
                                <div className="altras-cap-content">
                                    <div className="altras-cap-icon">
                                        <i className={layer.icon}></i>
                                    </div>
                                    <h4 className="altras-cap-title">{layer.label}</h4>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {layer.items.map((item, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "7px",
                                                    padding: "3px 0",
                                                    fontSize: "13px",
                                                    color: "rgba(255,255,255,0.75)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        width: "5px",
                                                        height: "5px",
                                                        borderRadius: "50%",
                                                        background: "var(--tj-color-theme-primary)",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Spanning note card */}
                    <div
                        className="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay={makeWowDelay(stackLayers.length, 0.2)}
                    >
                        <div
                            style={{
                                background: "var(--tj-color-theme-primary)",
                                borderRadius: "12px",
                                padding: "28px 24px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <h4 style={{ color: "#fff", marginBottom: "12px", fontSize: "18px", fontWeight: "700" }}>
                                Built to Evolve
                            </h4>
                            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                Each layer of the Pydart stack is independently upgradeable — enabling new AI capabilities,
                                sensors, and integrations without redesigning the mechanical foundation.
                            </p>
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
        </section>
    );
};

export default TechStack;
