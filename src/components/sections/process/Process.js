"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const Process = () => {
    const process = [
        {
            id: 1,
            title: "Mechanical Safety",
            desc: "High structural safety factors, anti-tip stability, and bariatric load support ensure mechanical reliability.",
        },
        {
            id: 2,
            title: "Electrical Safety",
            desc: "Medical-grade isolation, ultra-low leakage current, and patient-protected applied parts meet international standards.",
        },
        {
            id: 3,
            title: "EMC Compatibility",
            desc: "Designed to coexist safely with ICU equipment without electromagnetic interference.",
        },
    ];
    return (
        <section className="tj-working-process section-gap section-gap-x">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                            Safety by Design
                        </span>
                        <div className="heading-wrap-content">
                            <div className="sec-heading style-2">
                                <h2 className="sec-title text-anim">
                                    Built for Zero-Failure <span style={{ color: 'var(--tj-color-theme-primary)' }}>Healthcare.</span>
                                </h2>
                            </div>
                            <p className="desc wow fadeInUp" data-wow-delay=".5s">
                                Safety is embedded into every mechanical, electrical, and software layer of ALTRAS-1 with continuous monitoring and AI-based risk management.
                            </p>
                            <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                                <ButtonPrimary text={"Safety & Compliance"} url={"/safety"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="working-process-area">
                            {process?.length
                                ? process?.map((processSingle, idx) => (
                                        <ProcessCard
                                            key={idx}
                                            processSingle={processSingle}
                                            idx={idx}
                                        />
                                  ))
                                : ""}
                        </div>
                    </div>
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

export default Process;
