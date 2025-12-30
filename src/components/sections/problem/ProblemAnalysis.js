"use client";
import Link from "next/link";

const ProblemAnalysis = () => {
	const statistics = [
		{
			number: "1:670",
			label: "Nurse-Patient Ratio in India",
			description: "WHO recommends 1:300. India falls far short.",
			source: "Ministry of Health & Family Welfare",
			sourceUrl: "https://main.mohfw.gov.in/"
		},
		{
			number: "60%+",
			label: "Nurses with Musculoskeletal Disorders",
			description: "Back pain, shoulder injuries, and chronic strain from manual lifting.",
			source: "Indian Journal of Occupational & Environmental Medicine",
			sourceUrl: "https://www.ijoem.com/"
		},
		{
			number: "600,000+",
			label: "Nursing Shortage in India",
			description: "Critical gap that cannot be filled by recruitment alone.",
			source: "NITI Aayog Health Index",
			sourceUrl: "https://www.niti.gov.in/"
		},
		{
			number: "2.4M",
			label: "Additional Nurses Needed by 2030",
			description: "To meet basic healthcare demands of 1.4 billion people.",
			source: "WHO Global Health Workforce Statistics",
			sourceUrl: "https://www.who.int/data/gho/data/themes/topics/health-workforce"
		}
	];

	const problems = [
		{
			title: "The Manual Lifting Crisis",
			icon: "tji-health",
			content: `Patient transfer is one of the most physically demanding tasks in healthcare. In Indian hospitals, nurses often perform 15-20 transfers per shift. Each transfer requires lifting, pulling, and repositioning patients weighing 50-150+ kg. This repetitive strain leads to chronic injuries that end careers prematurely.`,
			impacts: [
				"35-40% of nursing injuries are from patient handling",
				"Average recovery time: 6-8 weeks per injury",
				"Many injuries lead to permanent disability",
				"High turnover creates constant training costs"
			]
		},
		{
			title: "The Staffing Shortage",
			icon: "tji-team",
			content: `India has one of the worst nurse-to-patient ratios in the world. With 1 nurse for every 670 patients (vs. WHO's 1:300 recommendation), healthcare workers are stretched beyond their limits. This shortage means fewer hands for transfers, longer wait times, and higher injury risk.`,
			impacts: [
				"Nurses work 12-16 hour shifts regularly",
				"Single-nurse transfers are common but dangerous",
				"Rural hospitals face even worse shortages",
				"Burnout leads to 40% annual turnover"
			]
		},
		{
			title: "The Economic Burden",
			icon: "tji-money",
			content: `Healthcare worker injuries cost the Indian healthcare system thousands of crores annually. Direct costs include medical treatment, workers' compensation, and temporary replacements. Indirect costs include reduced productivity, training new staff, and decreased quality of care.`,
			impacts: [
				"₹50,000+ average cost per injury incident",
				"Lost productivity during recovery periods",
				"Increased insurance premiums for hospitals",
				"Higher recruitment and training expenses"
			]
		},
		{
			title: "The Patient Safety Gap",
			icon: "tji-shield",
			content: `Manual transfers don't just hurt caregivers—they put patients at risk. Falls during transfers, skin injuries from friction, and disconnected monitoring equipment create dangerous care gaps. Elderly and critical patients are especially vulnerable.`,
			impacts: [
				"Falls during transfer cause serious injuries",
				"Skin shear and pressure injuries common",
				"Vital monitoring interrupted during moves",
				"Patient dignity compromised in the process"
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
							<p className="lead" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
								India is building world-class hospitals and training excellent doctors. But behind the scenes, 
								a silent crisis is unfolding. Our healthcare workers—the backbone of the system—are breaking down 
								under the physical strain of manual patient handling. This isn't just a workplace safety issue; 
								it's a threat to India's healthcare future.
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
									style={{ fontSize: '0.75rem', color: '#90cdf4', textDecoration: 'underline' }}
								>
									Source: {stat.source} ↗
								</a>
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
										Why Imported Solutions Won't Work
									</h3>
									<p style={{ lineHeight: 1.8, opacity: 0.9, marginBottom: '20px' }}>
										Western patient transfer systems cost ₹1-2 crore per unit—far beyond the reach of most Indian hospitals. 
										These devices are designed for different hospital layouts, different power conditions, and different 
										patient populations. India needs solutions built for Indian realities.
									</p>
									<p style={{ lineHeight: 1.8, opacity: 0.9 }}>
										With 2.1% of GDP spent on healthcare serving 1.4 billion people, every rupee must be optimized. 
										We can't afford to import our way out of this crisis. We must innovate.
									</p>
								</div>
								<div className="col-lg-6">
									<div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '30px' }}>
										<h5 style={{ color: '#fff', marginBottom: '20px' }}>Indian Healthcare Realities:</h5>
										<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
											{[
												"Narrow corridors in older hospital buildings",
												"Voltage fluctuations and power outages",
												"Diverse patient body types and weights",
												"Budget constraints across public & private sectors",
												"Need for Hindi & regional language interfaces",
												"Local service and spare parts availability"
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
