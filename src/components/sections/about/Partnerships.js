"use client";
import { useRef, useState } from "react";

const partners = [
    {
        icon: "tji-service-1",
        title: "Hospitals & Healthcare Institutions",
        desc: "Direct deployment partnerships enabling real-world validation and operational scaling of ALTRAS-1 and future intelligent platforms.",
        img: "/images/partnerships/hospitals.webp",
    },
    {
        icon: "tji-service-2",
        title: "Medical Technology Providers",
        desc: "Collaborative integration with medical device and health-tech companies to expand intelligent monitoring and clinical capabilities.",
        img: "/images/partnerships/medtech.webp",
    },
    {
        icon: "tji-service-3",
        title: "Research Institutions",
        desc: "Academic and R&D collaboration driving innovation in robotics engineering, AI safety systems, and clinical validation methodologies.",
        img: "/images/partnerships/research.webp",
    },
    {
        icon: "tji-growth",
        title: "Government Healthcare Programs",
        desc: "Engagement with national and state healthcare initiatives to support scalable deployment across public health infrastructure.",
        img: "/images/partnerships/government.webp",
    },
    {
        icon: "tji-worldwide",
        title: "Strategic Technology Partners",
        desc: "Alliances with technology companies supporting embedded systems, AI development, and digital infrastructure integration.",
        img: "/images/partnerships/strategic.webp",
    },
];

const TiltCard = ({ partner, delay }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ rx: 0, ry: 0, scale: 1, shine: 0 });
    const frameRef = useRef(null);

    const onMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;   // –0.5 → +0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(() => {
            setTilt({ rx: -y * 8, ry: x * 14, scale: 1.015, shine: 1 });
        });
    };

    const onLeave = () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        setTilt({ rx: 0, ry: 0, scale: 1, shine: 0 });
    };

    return (
        <div className="partnership-card-shell wow fadeInUp" data-wow-delay={delay}>
            <div
                ref={cardRef}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                className="partnership-card"
                style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.scale})`,
                    transition: tilt.scale === 1
                        ? "transform 0.55s cubic-bezier(0.23,1,0.32,1)"
                        : "transform 0.12s linear",
                    willChange: "transform",
                    boxShadow: tilt.scale > 1
                        ? "0 32px 72px rgba(0,0,0,0.48)"
                        : "0 10px 32px rgba(0,0,0,0.28)",
                }}
            >
                {/* Background image */}
                <img
                    src={partner.img}
                    alt={partner.title}
                    className="partnership-card-image"
                    style={{
                        transform: `scale(${tilt.scale > 1 ? 1.07 : 1})`,
                        transition: "transform 0.55s cubic-bezier(0.23,1,0.32,1)",
                    }}
                />

                {/* Dark gradient overlay */}
                <div className="partnership-card-overlay" />

                {/* Shine layer */}
                <div
                    className="partnership-card-shine"
                    style={{
                        background: `radial-gradient(circle at ${(tilt.ry / 14 + 0.5) * 100}% ${(-tilt.rx / 8 + 0.5) * 100}%, rgba(255,255,255,0.13) 0%, transparent 65%)`,
                        opacity: tilt.shine,
                        transition: tilt.shine ? "opacity 0.12s linear" : "opacity 0.55s ease",
                    }}
                />

                {/* Content */}
                <div className="partnership-card-content">
                    {/* Icon */}
                    <div className="partnership-card-icon">
                        <i className={partner.icon} style={{ color: "#fff", fontSize: "24px" }}></i>
                    </div>

                    {/* Text */}
                    <div className="partnership-card-copy">
                        <h4 style={{
                            color: "#ffffff",
                            fontSize: "1.15rem",
                            fontWeight: 700,
                            marginBottom: "0.4rem",
                            lineHeight: 1.3,
                        }}>
                            {partner.title}
                        </h4>
                        <p style={{
                            color: "rgba(255,255,255,0.72)",
                            fontSize: "0.875rem",
                            lineHeight: 1.65,
                            margin: 0,
                        }}>
                            {partner.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Partnerships = () => {
    return (
        <section id="partnerships" className="tj-working-process section-gap section-gap-x" style={{ scrollMarginTop: "120px" }}>
            <div className="container">

                {/* ── Section Header ── */}
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                Partnerships
                            </span>
                            <div className="heading-wrap-content">
                                <div className="sec-heading style-2">
                                    <h2 className="sec-title text-anim">
                                        Collaborating to Build{" "}
                                        <span style={{ color: "var(--tj-color-theme-primary)" }}>
                                            the Future.
                                        </span>
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                                    Pydart Intellicorp collaborates across the healthcare and technology
                                    ecosystem to accelerate the development and deployment of intelligent
                                    healthcare automation systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Tilt Partner Cards — full-width banner stack ── */}
                <div className="row row-gap-4" style={{ marginTop: "2rem" }}>
                    {partners.map((partner, idx) => (
                        <div key={idx} className="col-12">
                            <TiltCard partner={partner} delay={`${0.2 + idx * 0.12}s`} />
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

export default Partnerships;
