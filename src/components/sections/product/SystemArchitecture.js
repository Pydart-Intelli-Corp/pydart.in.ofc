"use client";

const SystemArchitecture = () => {
    const layers = [
        {
            icon: "tji-complete",
            title: "AI Safety & Control Layer",
            color: "#00c8b4",
            items: [
                "Transfer control algorithms",
                "Weight distribution monitoring",
                "Safety decision systems",
                "Fall detection logic",
            ],
        },
        {
            icon: "tji-worldwide",
            title: "Medical Monitoring Layer",
            color: "#3b82f6",
            items: [
                "ECG Monitoring",
                "SpO₂ Monitoring",
                "Blood Pressure Monitoring",
                "Real-time patient alerts",
                "Hospital data integration",
            ],
        },
        {
            icon: "tji-growth",
            title: "Motion Control & Automation Layer",
            color: "#a855f7",
            items: [
                "Linear actuator control",
                "Motor control systems",
                "Position sensors",
                "Safety interlocks",
                "Emergency stop systems",
            ],
        },
        {
            icon: "tji-service-4",
            title: "Mechanical Robotics Platform",
            color: "#f59e0b",
            items: [
                "Vertical lift system",
                "Horizontal transfer rails",
                "Load-bearing structure",
                "Anti-slip patient surface",
                "Industrial roller mechanisms",
            ],
        },
    ];

    return (
        <section
            id="architecture"
            className="tj-working-process section-gap section-gap-x"
            style={{ position: 'relative', overflow: 'hidden', background: 'var(--tj-color-theme-dark)', scrollMarginTop: '120px' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap" style={{ marginBottom: '3rem' }}>
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                System Architecture
                            </span>
                            <div className="heading-wrap-content">
                                <div style={{ maxWidth: '500px' }}>
                                    <h2 className="sec-title text-anim" style={{ color: '#ffffff', marginBottom: 0 }}>
                                        ALTRAS-1 <span style={{ color: 'var(--tj-color-theme-primary)' }}>Robotic Platform.</span>
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".5s" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                    Built as a multi-layer robotics system combining mechanical motion,
                                    intelligent control, and medical monitoring.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Architecture Layer Cards */}
                <div className="row row-gap-4">
                    {layers.map((layer, idx) => (
                        <div key={idx} className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${0.2 + idx * 0.15}s`}>
                            <div className="why-altras-stat-card">
                                <div className="why-altras-stat-icon">
                                    <i className={layer.icon}></i>
                                </div>
                                <div className="why-altras-stat-body">
                                    <span className="why-altras-stat-label">{layer.title}</span>
                                    <div style={{ marginTop: '0.6rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {layer.items.map((item, itemIdx) => (
                                            <span
                                                key={itemIdx}
                                                style={{
                                                    display: 'inline-block',
                                                    padding: '0.25rem 0.65rem',
                                                    fontSize: '0.75rem',
                                                    color: 'rgba(255,255,255,0.85)',
                                                    background: 'rgba(255,255,255,0.12)',
                                                    border: '1px solid rgba(255,255,255,0.2)',
                                                    borderRadius: '100px',
                                                    whiteSpace: 'nowrap',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Engineering Philosophy */}
                <div
                    className="wow fadeInUp"
                    data-wow-delay=".9s"
                    style={{
                        marginTop: '2rem',
                        padding: '1.5rem 2rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        borderLeft: '4px solid var(--tj-color-theme-primary)',
                    }}
                >
                    <h6 style={{
                        color: 'var(--tj-color-theme-primary)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '0.5rem',
                    }}>
                        Engineering Philosophy
                    </h6>
                    <p style={{
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        margin: 0,
                    }}>
                        ALTRAS-1 is designed as a robotic mobility platform, not simply a medical device.
                        Its layered architecture allows continuous expansion of software capabilities,
                        AI algorithms, and monitoring integrations. This approach enables future upgrades
                        without redesigning the mechanical system.
                    </p>
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

export default SystemArchitecture;
