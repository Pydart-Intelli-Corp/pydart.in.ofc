"use client";
import Image from "next/image";

const DevelopmentRoadmap = () => {
    const stages = [
        {
            title: "Prototype Development",
            desc: "Initial design, engineering, and proof-of-concept development.",
            status: "completed",
            statusLabel: "Completed",
            img: "/images/product/prototype.webp",
        },
        {
            title: "Engineering Validation",
            desc: "System testing, performance validation, and iterative improvement.",
            status: "current",
            statusLabel: "In Progress",
            img: "/images/product/engineering-validation.webp",
        },
        {
            title: "Clinical Testing",
            desc: "Real-world hospital trials, safety assessment, and clinical feedback.",
            status: "upcoming",
            statusLabel: "Upcoming",
            img: "/images/product/clinical-testing.webp",
        },
        {
            title: "Regulatory Certification",
            desc: "Medical device compliance, quality certifications, and standards approval.",
            status: "upcoming",
            statusLabel: "Upcoming",
            img: "/images/product/certification.webp",
        },
        {
            title: "Commercial Deployment",
            desc: "Market launch, hospital partnerships, and nationwide scaling.",
            status: "upcoming",
            statusLabel: "Upcoming",
            img: "/images/product/deployment.webp",
        },
    ];

    const statusColor = {
        completed: "var(--tj-color-theme-primary)",
        current: "#3b82f6",
        upcoming: "rgba(255,255,255,0.45)",
    };

    return (
        <section
            className="tj-working-process section-gap section-gap-x"
            style={{ position: 'relative', overflow: 'hidden', background: '#ffffff' }}
        >
            <div className="container">
                {/* Header */}
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap" style={{ marginBottom: '3rem' }}>
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: 'var(--tj-color-grey-1)' }}>
                                Development Roadmap
                            </span>
                            <div className="heading-wrap-content">
                                <div style={{ maxWidth: '500px' }}>
                                    <h2 className="sec-title text-anim" style={{ color: 'var(--tj-color-heading-primary)', marginBottom: 0 }}>
                                        From Prototype to <span style={{ color: 'var(--tj-color-theme-primary)' }}>Deployment.</span>
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".5s" style={{ color: 'var(--tj-color-text-body)' }}>
                                    ALTRAS-1 is currently progressing through its engineering validation stage.
                                    Pydart aims to launch ALTRAS-1 as the first step toward a broader ecosystem
                                    of healthcare robotics solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Grid â€” Aeline blog card style */}
                <div className="row g-3">
                    {stages.map((stage, idx) => (
                        <div
                            key={idx}
                            className={`col-12 col-md-6 ${idx === 4 ? 'col-lg-12' : 'col-lg-6'} wow fadeInUp`}
                            data-wow-delay={`${0.2 + idx * 0.12}s`}
                        >
                            <div className="roadmap-blog-card">
                                <Image
                                    src={stage.img}
                                    alt={stage.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="roadmap-blog-img"
                                />
                                {/* Gradient overlay */}
                                <div className="roadmap-blog-overlay" />

                                {/* Top badges */}
                                <div className="roadmap-blog-top">
                                    <span
                                        className="roadmap-blog-step"
                                    >
                                        {`0${idx + 1}`}
                                    </span>
                                    <span
                                        className="roadmap-blog-status"
                                        style={{ color: statusColor[stage.status], borderColor: statusColor[stage.status] }}
                                    >
                                        {stage.statusLabel}
                                    </span>
                                </div>

                                {/* Bottom content */}
                                <div className="roadmap-blog-content">
                                    <h4 className="roadmap-blog-title">{stage.title}</h4>
                                    <p className="roadmap-blog-desc">{stage.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default DevelopmentRoadmap;
