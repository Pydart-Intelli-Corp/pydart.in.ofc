"use client";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const WhyAltrasMatters = () => {
    const marketStats = [
        {
            icon: "tji-complete",
            label: "Healthcare Worker Injuries",
            value: 50,
            symbol: "%+",
            desc: "of nursing injuries are caused by manual patient transfers",
        },
        {
            icon: "tji-worldwide",
            label: "Mobility Devices in India",
            value: 100,
            symbol: "K+",
            desc: "patient mobility devices used across Indian hospitals",
        },
        {
            icon: "tji-growth",
            label: "Cost Reduction",
            value: 60,
            symbol: "%",
            desc: "more affordable than imported robotic alternatives",
        },
    ];

    return (
        <section className="tj-service-section service-2 section-gap section-gap-x" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="row row-gap-4">
                    {/* Why It Matters — Left Column */}
                    <div className="col-12 col-lg-6">
                        <div
                            className="about-content-area-2 wow fadeInUp"
                            data-wow-delay=".1s"
                        >
                            <div className="about-content" style={{ width: '100%' }}>
                                <div className="sec-heading style-2">
                                    <span className="sub-title" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'var(--tj-color-theme-primary)' }}>Why ALTRAS-1 Matters</span>
                                    <h2 className="sec-title" style={{ color: '#ffffff' }}>
                                        Solving Healthcare&apos;s Most <span style={{ color: 'var(--tj-color-theme-primary)' }}>Physical Challenge.</span>
                                    </h2>
                                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        Patient mobility is one of the most physically demanding tasks in healthcare
                                        environments. Studies show that a significant percentage of healthcare workers
                                        experience injuries related to patient handling. Hospitals also face increasing
                                        pressure from staffing shortages and rising patient volumes.
                                    </p>
                                    <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                                        ALTRAS-1 addresses these challenges by introducing robotic automation into
                                        patient transfer workflows, reducing physical strain and improving operational
                                        efficiency.
                                    </p>
                                </div>

                                {/* Market Opportunity */}
                                <div style={{
                                    marginTop: '2rem',
                                    padding: '1.5rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(12px)',
                                }}>
                                    <h5 style={{
                                        color: 'var(--tj-color-theme-primary)',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        marginBottom: '0.75rem',
                                    }}>
                                        Market Opportunity
                                    </h5>
                                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.7 }}>
                                        The global healthcare industry is rapidly investing in technologies that improve
                                        operational efficiency and patient safety. In India alone, hundreds of thousands
                                        of patient mobility devices are used across hospitals and healthcare institutions.
                                        However, existing robotic systems designed for patient transfer are often extremely
                                        expensive and inaccessible to many healthcare providers. Pydart Intellicorp aims to
                                        bridge this gap by delivering affordable intelligent robotic solutions for healthcare
                                        environments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Market Stats — Right Column */}
                    <div className="col-12 col-lg-6">
                        <div className="row why-altras-stat-row" style={{ height: '100%', rowGap: '0' }}>
                            {marketStats.map((stat, idx) => (
                                <div key={idx} className="col-12 wow fadeInUp" data-wow-delay={`${0.2 + idx * 0.15}s`}>
                                    <div className="why-altras-stat-card">
                                        <div className="why-altras-stat-icon">
                                            <i className={stat.icon}></i>
                                        </div>
                                        <div className="why-altras-stat-body">
                                            <span className="why-altras-stat-label">{stat.label}</span>
                                            <div className="why-altras-stat-count">
                                                <FunfactSingle currentValue={stat.value} symbol={stat.symbol} />
                                            </div>
                                            <p className="why-altras-stat-desc">{stat.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* BG decorative shapes */}
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt="" />
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt="" />
            </div>
        </section>
    );
};

export default WhyAltrasMatters;
