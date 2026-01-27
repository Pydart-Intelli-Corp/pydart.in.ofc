"use client";
import Link from "next/link";

const ProblemAnalysis = () => {
    const statistics = [
        {
            number: "1:670",
            label: "Nurse-Patient Ratio in India",
            description: "WHO recommends 1:300 for safe care delivery.",
            source: "Ministry of Health & Family Welfare, India",
            sourceUrl: "https://main.mohfw.gov.in/",
            year: "2024"
        },
        {
            number: "52-67%",
            label: "Nurses with Work-Related MSDs",
            description: "Back pain, shoulder injuries, and chronic strain from manual patient handling.",
            source: "Indian Journal of Occupational & Environmental Medicine",
            sourceUrl: "https://journals.lww.com/ijoe/pages/default.aspx",
            year: "2021-2023"
        },
        {
            number: "600,000+",
            label: "Current Nursing Shortage",
            description: "Critical gap that cannot be filled by recruitment alone.",
            source: "NITI Aayog Health Systems Report",
            sourceUrl: "https://www.niti.gov.in/",
            year: "2023"
        },
        {
            number: "2.4M",
            label: "Additional Nurses Needed by 2030",
            description: "To meet basic healthcare demands of 1.4 billion people.",
            source: "WHO Global Health Workforce Statistics",
            sourceUrl: "https://www.who.int/data/gho/data/themes/topics/health-workforce",
            year: "2024"
        }
    ];

    const problems = [
        {
            title: "The Manual Patient Handling Crisis",
            icon: "tji-health",
            content: `Patient transfer is the most physically demanding and injury-prone task in nursing. Indian nurses perform 10-25 patient transfers per shift, each requiring lifting, repositioning, or moving patients weighing 40-150+ kg. According to studies published in the Indian Journal of Occupational and Environmental Medicine, 52-67% of Indian nurses report work-related musculoskeletal disorders (MSDs), with lower back pain being the most prevalent condition.`,
            impacts: [
                "Lower back pain affects 40-65% of all nursing staff",
                "Shoulder and neck injuries in 30-45% of caregivers",
                "Average recovery time: 6-12 weeks per MSD injury",
                "30% of nurses consider leaving profession due to chronic pain",
                "Manual transfers increase patient fall risk by 3-4x"
            ]
        },
        {
            title: "The Critical Staffing Shortage",
            icon: "tji-team",
            content: `India faces one of the world's worst nurse-to-patient ratios at 1:670, drastically below WHO's recommended 1:300 ratio. With over 600,000 nursing positions vacant and 2.4 million additional nurses needed by 2030, the shortage creates a dangerous cycle: overworked nurses → more injuries → higher turnover → worsening shortage. Rural and tier-2 hospitals face even more severe shortages.`,
            impacts: [
                "Single-nurse transfers are routine but biomechanically unsafe",
                "12-16 hour shifts are normalized, increasing fatigue-related injuries",
                "40% annual turnover in nursing profession",
                "80% of rural hospitals operate with <50% required nursing staff",
                "Patient care quality deteriorates under staff shortage pressure"
            ]
        },
        {
            title: "The Economic & Productivity Burden",
            icon: "tji-money",
            content: `Work-related injuries among healthcare workers cost the Indian healthcare system thousands of crores annually. Each musculoskeletal injury incident costs hospitals ₹45,000-₹75,000 in direct medical costs, workers' compensation, and replacement staffing. Indirect costs include productivity loss, litigation, increased insurance premiums, and constant recruitment-training cycles.`,
            impacts: [
                "₹50,000-₹75,000 average cost per MSD injury incident",
                "Lost work days: 20-45 days per injury on average",
                "Hospitals spend 15-25% of HR budget on injury-related costs",
                "Recruitment & training costs surge due to 40% turnover",
                "Reduced bed utilization due to understaffing"
            ]
        },
        {
            title: "The Patient Safety & Dignity Gap",
            icon: "tji-shield",
            content: `Manual transfers don't just injure caregivers—they endanger patients. Falls during transfers, skin shear injuries, disconnected monitoring lines, and rough handling create serious safety risks. Elderly patients, post-surgical cases, and ICU patients are especially vulnerable. Beyond safety, manual transfers often compromise patient dignity and comfort during vulnerable moments.`,
            impacts: [
                "Patient falls during transfer cause fractures, head injuries",
                "Skin shear and pressure ulcers from rough repositioning",
                "Disconnected IV lines, catheters during hasty transfers",
                "Increased infection risk from improper handling protocols",
                "Patient fear and anxiety during transfer procedures"
            ]
        }
    ];

    return (
        <section className="problem-analysis-section section-gap">
            <div className="container">
                {/* Introduction */}
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="problem-intro text-center wow fadeInUp">
                            <span className="sub-title" style={{ color: 'var(--tj-color-theme-primary)', fontWeight: 600, marginBottom: '15px', display: 'block' }}>Understanding the Crisis</span>
                            <h2 className="sec-title mb-4">Why Indian Healthcare Needs Innovation</h2>
                            <p style={{ lineHeight: 1.8, marginBottom: '20px' }}>
                                India is building world-class hospitals and training excellent doctors and nurses. But behind the scenes, 
                                a silent crisis is unfolding. Our healthcare workers—the backbone of the system—are breaking down 
                                under the physical strain of manual patient handling. With nurse-to-patient ratios at 1:670 (versus WHO's 
                                1:300 recommendation) and 52-67% of nurses suffering from work-related musculoskeletal disorders, this isn't 
                                just a workplace safety issue—it's a systemic threat to India's healthcare capacity and patient safety.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Statistics */}
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className="text-center mb-4 wow fadeInUp" data-wow-delay=".1s">
                            The Numbers That Demand Action
                        </h3>
                    </div>
                    {statistics.map((stat, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div 
                                className="stat-card wow fadeInUp" 
                                data-wow-delay={`${0.1 * (index + 1)}s`}
                                style={{
                                    background: 'linear-gradient(135deg, var(--tj-color-theme-primary) 0%, #1a365d 100%)',
                                    borderRadius: '16px',
                                    padding: '30px 25px',
                                    height: '100%',
                                    color: '#fff',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '10px' }}>
                                    {stat.number}
                                </div>
                                <h5 style={{ fontSize: '1rem', marginBottom: '10px', color: '#fff' }}>
                                    {stat.label}
                                </h5>
                                <p style={{ fontSize: '0.85rem', opacity: 0.9, marginBottom: '15px' }}>
                                    {stat.description}
                                </p>
                                <a 
                                    href={stat.sourceUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ fontSize: '0.72rem', color: '#90cdf4', textDecoration: 'none', display: 'block', marginBottom: '4px' }}
                                >
                                    Source: {stat.source} ↗
                                </a>
                                <span style={{ fontSize: '0.7rem', opacity: 0.75, fontStyle: 'italic' }}>
                                    ({stat.year})
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Problems */}
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className="text-center mb-5 wow fadeInUp">
                            Four Interconnected Challenges
                        </h3>
                    </div>
                    {problems.map((problem, index) => (
                        <div className="col-lg-6 mb-4" key={index}>
                            <div 
                                className="problem-card wow fadeInUp" 
                                data-wow-delay={`${0.1 * (index + 1)}s`}
                                style={{
                                    background: '#f8fafc',
                                    borderRadius: '16px',
                                    padding: '35px',
                                    height: '100%',
                                    border: '1px solid #e2e8f0'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <span 
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            background: 'var(--tj-color-theme-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '15px'
                                        }}
                                    >
                                        <i className={problem.icon} style={{ fontSize: '24px', color: '#fff' }}></i>
                                    </span>
                                    <h4 style={{ margin: 0, fontSize: '1.3rem' }}>{problem.title}</h4>
                                </div>
                                <p style={{ lineHeight: 1.8, marginBottom: '20px', color: '#475569' }}>
                                    {problem.content}
                                </p>
                                <h6 style={{ marginBottom: '12px', color: '#1e293b' }}>Key Impacts:</h6>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {problem.impacts.map((impact, i) => (
                                        <li 
                                            key={i} 
                                            style={{ 
                                                padding: '8px 0', 
                                                paddingLeft: '25px',
                                                position: 'relative',
                                                color: '#64748b',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--tj-color-theme-primary)'
                                            }}>✓</span>
                                            {impact}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* India Context */}
                <div className="row mb-5">
                    <div className="col-12">
                        <div 
                            className="india-context wow fadeInUp"
                            style={{
                                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                                borderRadius: '20px',
                                padding: '50px',
                                color: '#fff'
                            }}
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <span style={{ color: 'var(--tj-color-theme-primary)', fontWeight: 600, marginBottom: '15px', display: 'block' }}>
                                        The Indian Context
                                    </span>
                                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>
                                        Why Imported Solutions Don't Fit India
                                    </h3>
                                    <p style={{ lineHeight: 1.8, opacity: 0.9, marginBottom: '20px' }}>
                                        Western patient transfer systems cost ₹80 lakh to ₹2 crore per unit—astronomically beyond the reach of most Indian hospitals, 
                                        especially public healthcare facilities and tier-2/tier-3 private hospitals. These imported devices are designed for 
                                        different hospital infrastructures (wider corridors, standardized room sizes), stable power grids, and different patient demographics. 
                                        India needs solutions built ground-up for Indian healthcare realities.
                                    </p>
                                    <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
                                        With just 2.1-2.5% of GDP allocated to healthcare while serving 1.4 billion people, every rupee must deliver maximum impact. 
                                        We cannot afford to import our way out of this crisis. Indigenous innovation isn't just cost-effective—it's mission-critical 
                                        for sustainable, scalable healthcare transformation.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '30px' }}>
                                        <h5 style={{ color: '#fff', marginBottom: '20px' }}>Indian Healthcare Realities:</h5>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            {[
                                                "Narrow corridors in legacy hospital buildings (typical width: 4-6 feet)",
                                                "Voltage fluctuations (170V-270V) and frequent power interruptions",
                                                "Diverse patient body types, weights (30-150+ kg range)",
                                                "Budget constraints: Public hospitals operate on ₹500-₹800/bed/day",
                                                "Multi-lingual interfaces (Hindi, English + 15+ regional languages)",
                                                "Local service networks, spare parts availability within 24-48 hours",
                                                "Humid tropical climate (20-45°C) requiring ruggedized components",
                                                "Need for zero-training operation due to high staff turnover"
                                            ].map((item, i) => (
                                                <li key={i} style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1' }}>
                                                    <span style={{ color: 'var(--tj-color-theme-primary)', marginRight: '10px' }}>→</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Solution Teaser */}
                <div className="row">
                    <div className="col-12">
                        <div 
                            className="solution-teaser text-center wow fadeInUp"
                            style={{
                                background: 'linear-gradient(135deg, var(--tj-color-theme-primary) 0%, #0d9488 100%)',
                                borderRadius: '20px',
                                padding: '60px 40px',
                                color: '#fff'
                            }}
                        >
                            <h3 style={{ color: '#fff', marginBottom: '20px' }}>
                                This Is Why We're Building ALTRAS-1
                            </h3>
                            <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 30px', opacity: 0.95 }}>
                                An indigenous robotic patient transfer system designed in Kerala, built for Indian hospitals, 
                                priced for Indian budgets. Zero manual lifting. Single-operator transfers. 
                                Made in India, for India.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link 
                                    href="/services" 
                                    className="tj-primary-btn"
                                    style={{
                                        background: '#fff',
                                        color: 'var(--tj-color-theme-primary)',
                                        padding: '15px 35px',
                                        borderRadius: '8px',
                                        fontWeight: 600,
                                        textDecoration: 'none'
                                    }}
                                >
                                    Explore ALTRAS-1 →
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="tj-secondary-btn"
                                    style={{
                                        background: 'transparent',
                                        color: '#fff',
                                        padding: '15px 35px',
                                        borderRadius: '8px',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        border: '2px solid #fff'
                                    }}
                                >
                                    Partner With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemAnalysis;
