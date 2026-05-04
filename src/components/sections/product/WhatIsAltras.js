"use client";

const features = [
    {
        number: "01",
        icon: "tji-service-1",
        title: "Automated Vertical Lift",
        desc: "Motorized lift system enabling bed alignment and controlled height adjustment for safe patient positioning across varying surface heights.",
        image: "/images/hero/altras-zrv-hero.webp",
    },
    {
        number: "02",
        icon: "tji-service-2",
        title: "Automated Horizontal Transfer",
        desc: "Smooth bed-to-bed transfer system that eliminates manual lifting, removing physical strain from caregivers and ensuring patient dignity throughout the transfer process.",
        image: "/images/hero/altras-transfer-hero.webp",
    },
    {
        number: "03",
        icon: "tji-service-3",
        title: "AI-Assisted Transfer Control",
        desc: "Smart algorithms assist with weight distribution, real-time transfer monitoring, fall detection, and adaptive motion correction for maximum safety during every transfer.",
        image: "/images/hero/altras-safety-hero.webp",
    },
    {
        number: "04",
        icon: "tji-service-4",
        title: "Integrated Medical Monitoring",
        desc: "ECG, SpO₂, blood pressure, and real-time alert systems continuously monitor patient vitals during transfers, integrating with hospital data systems for complete care continuity.",
        image: "/images/hero/hospital.webp",
    },
];

const WhatIsAltras = () => {
    return (
        <section
            id="altras-overview"
            className="tj-about-section section-gap"
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--tj-color-theme-dark)',
                marginTop: '4rem',
                scrollMarginTop: '120px',
            }}
        >
            {/* Intro block — full width */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap" style={{ marginBottom: '4.5rem' }}>
                            <span
                                className="sub-title wow fadeInUp"
                                data-wow-delay=".1s"
                                style={{
                                    color: 'var(--tj-color-theme-primary)',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    border: '0',
                                    padding: '7px 10px',
                                    marginBottom: '6px',
                                }}
                            >
                                First Deployment Platform
                            </span>
                            <div className="heading-wrap-content" style={{ alignItems: 'flex-start' }}>
                                <div style={{ maxWidth: '500px' }}>
                                    <h2 className="sec-title text-anim" style={{ color: '#ffffff', marginBottom: '4px' }}>
                                        ALTRAS-1
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay=".3s" style={{
                                        fontSize: '1.05rem',
                                        color: 'var(--tj-color-theme-primary)',
                                        fontWeight: 500,
                                        fontStyle: 'italic',
                                        letterSpacing: '0.02em',
                                        marginBottom: 0,
                                        lineHeight: 1.3,
                                    }}>
                                        Advanced Linear Transferring &amp; Reporting Automated System
                                    </p>
                                </div>
                                <div className="desc">
                                    <p className="wow fadeInUp" data-wow-delay=".4s" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>
                                        ALTRAS-1 is an AI-enabled robotic patient transfer platform designed to
                                        eliminate manual patient lifting and improve safety for both patients and
                                        healthcare professionals. Traditional patient transfers rely heavily on
                                        manual lifting, which exposes healthcare workers to injuries and increases
                                        the risk of patient mishandling.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay=".5s" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 0 }}>
                                        ALTRAS-1 transforms this process through automated robotic transfer technology
                                        combined with real-time medical monitoring. This system introduces intelligent
                                        automation into hospital patient mobility operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alternating large feature cards */}
                <div className="altras-overview-stack">
                    {features.map((feature, idx) => {
                        const isEven = idx % 2 === 1;
                        return (
                            <div
                                key={idx}
                                className={`wow fadeInUp altras-overview-card ${isEven ? "is-reverse" : ""}`}
                                data-wow-delay={`${0.2 + idx * 0.1}s`}
                            >
                                {/* Text side */}
                                <div className="altras-overview-content">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '1.25rem',
                                    }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: 'var(--tj-color-theme-primary)',
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                        }}>
                                            {feature.number}
                                        </span>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(135deg, var(--tj-color-theme-primary), rgba(0,200,180,0.3))',
                                            fontSize: '1.1rem',
                                            color: '#fff',
                                        }}>
                                            <i className={feature.icon}></i>
                                        </span>
                                    </div>
                                    <h4 style={{
                                        color: '#ffffff',
                                        fontWeight: 700,
                                        marginBottom: '1rem',
                                        lineHeight: 1.3,
                                        fontSize: '1.4rem',
                                    }}>
                                        {feature.title}
                                    </h4>
                                    <p style={{
                                        color: 'rgba(255,255,255,0.65)',
                                        fontSize: '1rem',
                                        lineHeight: 1.75,
                                        margin: 0,
                                    }}>
                                        {feature.desc}
                                    </p>
                                </div>

                                {/* Image side */}
                                <div className="altras-overview-media">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            display: 'block',
                                            transition: 'transform 0.6s ease',
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: isEven
                                            ? 'linear-gradient(to right, rgba(12,30,33,0.3), transparent)'
                                            : 'linear-gradient(to left, rgba(12,30,33,0.3), transparent)',
                                        pointerEvents: 'none',
                                    }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt="" />
            </div>
        </section>
    );
};

export default WhatIsAltras;
