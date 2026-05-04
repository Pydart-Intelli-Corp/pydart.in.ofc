"use client";

const BusinessModel = () => {
    const models = [
        {
            icon: "tji-service-1",
            title: "Equipment Sales",
            price: "₹50,000 – ₹1,50,000",
            unit: "per unit",
            desc: "Hospitals and healthcare institutions purchase ALTRAS-1 systems directly for permanent deployment.",
            highlight: true,
        },
        {
            icon: "tji-service-2",
            title: "Service & Maintenance",
            price: "₹15,000",
            unit: "per year",
            desc: "Annual maintenance and monitoring services ensure continuous system reliability and uptime.",
            highlight: false,
        },
        {
            icon: "tji-service-4",
            title: "Leasing Model",
            price: "Flexible",
            unit: "terms",
            desc: "Flexible equipment leasing options allow hospitals to deploy robotic systems without large upfront capital investments.",
            highlight: false,
        },
    ];

    return (
        <section className="tj-working-process section-gap section-gap-x" style={{ position: 'relative', overflow: 'hidden', background: 'var(--tj-color-theme-dark)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap" style={{ marginBottom: '3rem' }}>
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                Business Model
                            </span>
                            <div className="heading-wrap-content">
                                <div style={{ maxWidth: '500px' }}>
                                    <h2 className="sec-title text-anim" style={{ color: '#ffffff', marginBottom: 0 }}>
                                        Hybrid Hardware & <span style={{ color: 'var(--tj-color-theme-primary)' }}>Service Revenue.</span>
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".5s" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                    Pydart Intellicorp operates a hybrid hardware and service revenue model,
                                    making intelligent robotic healthcare accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-gap-4 justify-content-center">
                    {models.map((model, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div
                                className="wow fadeInUp"
                                data-wow-delay={`${0.3 + idx * 0.15}s`}
                                style={{
                                    background: model.highlight
                                        ? 'linear-gradient(135deg, rgba(0,200,180,0.08), rgba(0,200,180,0.02))'
                                        : 'rgba(255,255,255,0.03)',
                                    border: model.highlight
                                        ? '1px solid rgba(0,200,180,0.25)'
                                        : '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '20px',
                                    padding: '2rem 1.75rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backdropFilter: 'blur(12px)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.borderColor = 'var(--tj-color-theme-primary)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,200,180,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = model.highlight
                                        ? 'rgba(0,200,180,0.25)'
                                        : 'rgba(255,255,255,0.08)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Icon */}
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, var(--tj-color-theme-primary), rgba(0,200,180,0.3))',
                                    marginBottom: '1.25rem',
                                    fontSize: '1.5rem',
                                    color: '#fff',
                                }}>
                                    <i className={model.icon}></i>
                                </span>

                                {/* Title */}
                                <h5 style={{
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    marginBottom: '1rem',
                                }}>
                                    {model.title}
                                </h5>

                                {/* Price */}
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{
                                        fontSize: '1.75rem',
                                        fontWeight: 700,
                                        color: 'var(--tj-color-theme-primary)',
                                        lineHeight: 1.2,
                                    }}>
                                        {model.price}
                                    </span>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: 'rgba(255,255,255,0.4)',
                                        marginLeft: '0.5rem',
                                    }}>
                                        {model.unit}
                                    </span>
                                </div>

                                {/* Description */}
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'rgba(255,255,255,0.6)',
                                    lineHeight: 1.6,
                                    margin: 0,
                                    flex: 1,
                                }}>
                                    {model.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt="" />
            </div>
        </section>
    );
};

export default BusinessModel;
