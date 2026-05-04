import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const AltrasIntro = () => {
    const capabilities = [
        {
            icon: "tji-service-1",
            title: "Automated Vertical Lift",
            desc: "Motorized lift system enabling precise bed alignment and controlled height adjustment — no manual force required.",
            img: "/images/hero/altras-zrv-hero.webp",
            delay: ".3s",
        },
        {
            icon: "tji-service-2",
            title: "Automated Horizontal Transfer",
            desc: "Smooth bed-to-bed transfer system that fully eliminates the need for manual lifting during patient movement.",
            img: "/images/hero/altras-transfer-hero.webp",
            delay: ".45s",
        },
        {
            icon: "tji-service-3",
            title: "AI-Assisted Transfer Control",
            desc: "Smart algorithms assist with real-time weight distribution and safety monitoring throughout every transfer.",
            img: "/images/hero/altras-safety-hero.webp",
            delay: ".6s",
        },
    ];

    return (
        <section className="tj-working-process section-gap section-gap-x">
            <div className="container">

                {/* ── Section heading row ───────────────────────── */}
                <div className="row align-items-end row-gap-4">
                    <div className="col-lg-7">
                        <div className="sec-heading style-2">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                                First Deployment Platform
                            </span>
                            <h2 className="sec-title wow fadeInUp" data-wow-delay=".3s">
                                ALTRAS-1 —{" "}
                                <span style={{ color: "var(--tj-color-theme-primary)" }}>
                                    Advanced Linear Transferring &amp; Reporting Automated System
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="wow fadeInUp" data-wow-delay=".35s">
                            <p style={{ marginBottom: "1.75rem", lineHeight: "1.85" }}>
                                ALTRAS-1 is an AI-enabled robotic patient transfer platform designed to eliminate manual patient lifting and improve safety for both patients and healthcare professionals. Traditional transfers rely on manual lifting — ALTRAS-1 replaces that with intelligent robotic automation combined with real-time medical monitoring.
                            </p>
                            <ButtonPrimary text={"Explore ALTRAS-1"} url={"/product/altras-1"} />
                        </div>
                    </div>
                </div>

                {/* ── Featured hero image banner ─────────────────── */}
                <div className="row">
                    <div className="col-12">
                        <div
                            className="altras-feature-image wow fadeInUp"
                            data-wow-delay=".25s"
                        >
                            <Image
                                src="/images/hero/hospital.webp"
                                alt="ALTRAS-1 intelligent automation in hospital"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div className="altras-feature-overlay">
                                <div>
                                    <span className="altras-feature-overline">
                                        Intelligent Healthcare Robotics
                                    </span>
                                    <p className="altras-feature-tagline">
                                        This system introduces intelligent automation into hospital patient mobility operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Core Capabilities heading ──────────────────── */}
                <div className="row altras-caps-heading">
                    <div className="col-12">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                            ALTRAS-1 Core Capabilities
                        </span>
                    </div>
                </div>

                {/* ── Capability cards ───────────────────────────── */}
                <div className="row row-gap-4">
                    {capabilities.map((cap, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div
                                className="altras-cap-card wow fadeInUp"
                                data-wow-delay={cap.delay}
                            >
                                <Image
                                    src={cap.img}
                                    alt={cap.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="altras-cap-overlay" />
                                <div className="altras-cap-content">
                                    <div className="altras-cap-icon">
                                        <i className={cap.icon}></i>
                                    </div>
                                    <h4 className="altras-cap-title">{cap.title}</h4>
                                    <p className="altras-cap-desc">{cap.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* BG decorative shapes */}
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

export default AltrasIntro;
