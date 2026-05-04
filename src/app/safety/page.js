import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Safety & Compliance | Pydart Intelli Corp - ALTRAS-1 Robotic Safety Standards",
    description:
        "ALTRAS-1 is engineered to the highest safety standards — IEC 60601-1, ISO 13485, CDSCO compliance, and multi-layer AI safety for hospital-grade robotic patient transfer.",
};

export default function SafetyPage() {
    return (
        <div>
            <BackToTop />
            <Header />
            <Header isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        <HeroInner
                            title="Safety & Compliance"
                            text="Safety & Compliance"
                            heroImage={"/images/bg/safety-banner.webp"}
                            breadcrums={[{ name: "ALTRAS-1", path: "/product/altras-1" }]}
                        />

                        {/* ── Main Content ── */}
                        <section className="tj-service-area section-gap">
                            <div className="container">
                                <div className="row row-gap-5">
                                    {/* ── Main content: full width ── */}
                                    <div className="col-12">
                                        <div className="post-details-wrapper">

                                            {/* Hero image */}
                                            <div className="blog-images wow fadeInUp" data-wow-delay=".1s">
                                                <Image
                                                    src="/images/service/service-details.webp"
                                                    alt="ALTRAS-1 Safety & Compliance"
                                                    width={870}
                                                    height={450}
                                                    style={{ height: "auto" }}
                                                />
                                            </div>

                                            {/* Intro */}
                                            <h2 className="title title-anim">
                                                Safety by Design — Not an Afterthought.
                                            </h2>
                                            <div className="blog-text">
                                                <p className="wow fadeInUp" data-wow-delay=".2s">
                                                    Safety is the foundation of ALTRAS-1, not an added feature. Every mechanical, electrical,
                                                    and software layer of ALTRAS-1 is engineered around the principle that a medical robotic
                                                    system must operate reliably in the demanding and unpredictable conditions of real Indian
                                                    hospitals — power fluctuations, uneven flooring, high humidity, and continuous multi-shift usage.
                                                </p>
                                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                                    Built to meet both international standards and Indian regulatory requirements, ALTRAS-1
                                                    ensures patient safety, caregiver protection, and operational reliability at every stage
                                                    of its transfer workflow.
                                                </p>

                                                {/* Safety pillars checklist */}
                                                <ul className="wow fadeInUp" data-wow-delay=".3s">
                                                    <li>
                                                        <span><i className="tji-check"></i></span>
                                                        Multi-layer mechanical, electrical &amp; AI safety architecture
                                                    </li>
                                                    <li>
                                                        <span><i className="tji-check"></i></span>
                                                        Medical-grade electrical isolation per IEC 60601
                                                    </li>
                                                    <li>
                                                        <span><i className="tji-check"></i></span>
                                                        Bariatric load support up to 250 kg
                                                    </li>
                                                    <li>
                                                        <span><i className="tji-check"></i></span>
                                                        Anti-tip stability on uneven hospital flooring
                                                    </li>
                                                    <li>
                                                        <span><i className="tji-check"></i></span>
                                                        Surge &amp; spike protection for Indian power grids
                                                    </li>
                                                    <li>
                                                        <span><i className="tji-check"></i></span>
                                                        EMC compatibility with ICU equipment
                                                    </li>
                                                    <li>
                                                        <span><i className="tji-check"></i></span>
                                                        Comprehensive risk management &amp; hazard analysis
                                                    </li>
                                                </ul>

                                                {/* Dual images */}
                                                <div className="images-wrap">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="image-box wow fadeInUp" data-wow-delay=".3s">
                                                                <Image
                                                                    src="/images/service/service-3.webp"
                                                                    alt="Mechanical Safety"
                                                                    width={420}
                                                                    height={420}
                                                                    style={{ height: "auto" }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="image-box wow fadeInUp" data-wow-delay=".5s">
                                                                <Image
                                                                    src="/images/service/service-4.webp"
                                                                    alt="Electrical Safety"
                                                                    width={420}
                                                                    height={420}
                                                                    style={{ height: "auto" }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Safety categories */}
                                                <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                                    Safety Architecture of ALTRAS-1
                                                </h3>

                                                <div className="details-content-box">
                                                    <div className="service-details-item wow fadeInUp" data-wow-delay=".2s">
                                                        <span className="number">01.</span>
                                                        <h6 className="title">Mechanical Safety</h6>
                                                        <div className="desc">
                                                            <p>
                                                                High structural safety factors engineered for Indian hospital conditions.
                                                                Anti-tip stability systems prevent tipping on uneven flooring, and
                                                                bariatric load support up to 250 kg ensures safe transfers for all patient types.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="service-details-item wow fadeInUp" data-wow-delay=".4s">
                                                        <div className="service-number">
                                                            <span className="number">02.</span>
                                                            <h6 className="title">Electrical Safety</h6>
                                                            <div className="desc">
                                                                <p>
                                                                    Medical-grade isolation per IEC 60601 with ultra-low leakage current.
                                                                    Patient-protected applied parts and surge protection designed specifically
                                                                    for the voltage fluctuations common in Indian hospital power infrastructure.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-details-item wow fadeInUp" data-wow-delay=".6s">
                                                        <div className="service-number">
                                                            <span className="number">03.</span>
                                                            <h6 className="title">AI Safety &amp; Control Layer</h6>
                                                            <div className="desc">
                                                                <p>
                                                                    AI algorithms provide real-time safety monitoring, load sensing,
                                                                    fall detection support, and predictive fault detection. Safety
                                                                    interlocks prevent operation under unsafe conditions, protecting
                                                                    both patients and caregivers at every step.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service-details-item wow fadeInUp" data-wow-delay=".8s">
                                                        <div className="service-number">
                                                            <span className="number">04.</span>
                                                            <h6 className="title">EMC Compatibility</h6>
                                                            <div className="desc">
                                                                <p>
                                                                    Designed to coexist safely with ICU equipment including Indian-manufactured
                                                                    ventilators and monitors. Electromagnetic compatibility testing ensures
                                                                    ALTRAS-1 does not interfere with critical life-support devices.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Regulatory section */}
                                                <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                                    Regulatory Compliance Roadmap
                                                </h3>
                                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                                    ALTRAS-1 is being developed with full regulatory compliance as a core objective.
                                                    Our planned certifications align with both Indian government requirements and
                                                    international standards, enabling market access across India and export readiness globally.
                                                </p>

                                                {/* FAQ accordion */}
                                                <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                                    Safety &amp; Compliance FAQ
                                                </h3>
                                                <BootstrapWrapper>
                                                    <div className="accordion tj-faq style-2" id="safetyFaq">
                                                        <div className="accordion-item active wow fadeInUp" data-wow-delay=".2s">
                                                            <button
                                                                className="faq-title"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#sfaq-1"
                                                                aria-expanded="true"
                                                            >
                                                                What safety standards does ALTRAS-1 comply with?
                                                            </button>
                                                            <div id="sfaq-1" className="collapse show" data-bs-parent="#safetyFaq">
                                                                <div className="accordion-body faq-text">
                                                                    <p>
                                                                        ALTRAS-1 is being designed to meet IEC 60601-1 medical electrical equipment
                                                                        safety standards, ISO 13485 quality management requirements, CDSCO Class C
                                                                        Medical Device registration (India), BIS certification for the Indian market,
                                                                        and CE marking for international export readiness.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                                            <button
                                                                className="faq-title collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#sfaq-2"
                                                                aria-expanded="false"
                                                            >
                                                                How does ALTRAS-1 protect patients during transfer?
                                                            </button>
                                                            <div id="sfaq-2" className="collapse" data-bs-parent="#safetyFaq">
                                                                <div className="accordion-body faq-text">
                                                                    <p>
                                                                        ALTRAS-1 uses AI-assisted transfer control with real-time load sensing,
                                                                        fall detection support, and transfer monitoring. Safety interlocks prevent
                                                                        operation if unsafe conditions are detected, and the system provides
                                                                        real-time medical monitoring (ECG, SpO₂, blood pressure) throughout
                                                                        the transfer process.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                                            <button
                                                                className="faq-title collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#sfaq-3"
                                                                aria-expanded="false"
                                                            >
                                                                Is ALTRAS-1 safe to use near ICU equipment?
                                                            </button>
                                                            <div id="sfaq-3" className="collapse" data-bs-parent="#safetyFaq">
                                                                <div className="accordion-body faq-text">
                                                                    <p>
                                                                        Yes. ALTRAS-1 is designed with EMC (Electromagnetic Compatibility) compliance
                                                                        to safely coexist with ICU equipment including ventilators and patient monitors.
                                                                        The system undergoes rigorous electromagnetic compatibility testing to ensure
                                                                        no interference with critical life-support devices.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                                            <button
                                                                className="faq-title collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#sfaq-4"
                                                                aria-expanded="false"
                                                            >
                                                                How is ALTRAS-1 adapted for Indian hospital conditions?
                                                            </button>
                                                            <div id="sfaq-4" className="collapse" data-bs-parent="#safetyFaq">
                                                                <div className="accordion-body faq-text">
                                                                    <p>
                                                                        ALTRAS-1 is specifically engineered for Indian hospital environments —
                                                                        including surge protection for power grid fluctuations, anti-tip stability
                                                                        for uneven flooring, and high structural safety margins for bariatric loads
                                                                        up to 250 kg. Redundant systems ensure operation even during power interruptions.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                                            <button
                                                                className="faq-title collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#sfaq-5"
                                                                aria-expanded="false"
                                                            >
                                                                What is the risk management approach for ALTRAS-1?
                                                            </button>
                                                            <div id="sfaq-5" className="collapse" data-bs-parent="#safetyFaq">
                                                                <div className="accordion-body faq-text">
                                                                    <p>
                                                                        ALTRAS-1 undergoes comprehensive hazard analysis per ISO 14971 risk
                                                                        management for medical devices. This covers identification, evaluation,
                                                                        and control of hazards across mechanical, electrical, and software
                                                                        systems — ensuring safe operation during both normal use and fault conditions.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </BootstrapWrapper>
                                            </div>

                                            {/* Navigation */}
                                            <div className="tj-post__navigation mb-0 wow fadeInUp" data-wow-delay="0.3s">
                                                <div className="tj-nav__post previous">
                                                    <div className="tj-nav-post__nav prev_post">
                                                        <Link href="/product/altras-1">
                                                            <span><i className="tji-arrow-left"></i></span>
                                                            ALTRAS-1 Overview
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link href="/technology" className="tj-nav-post__grid">
                                                    <i className="tji-window"></i>
                                                </Link>
                                                <div className="tj-nav__post next">
                                                    <div className="tj-nav-post__nav next_post">
                                                        <Link href="/contact">
                                                            Contact Us
                                                            <span><i className="tji-arrow-right"></i></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>

                        <Cta />
                    </main>
                    <FooterBasic />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}
