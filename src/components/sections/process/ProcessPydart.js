import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const ProcessPydart = () => {
    const process = [
        {
            id: 1,
            title: "Robotics Engineering",
            desc: "Design of automated physical motion systems capable of interacting safely with humans in real operational environments.",
        },
        {
            id: 2,
            title: "Embedded Systems",
            desc: "Real-time control systems coordinating sensors, motors and safety protocols across every layer of the platform.",
        },
        {
            id: 3,
            title: "Artificial Intelligence",
            desc: "Algorithms supporting automation, safety monitoring and intelligent system behavior under dynamic conditions.",
        },
        {
            id: 4,
            title: "Medical Systems Integration",
            desc: "Integration with healthcare monitoring systems and hospital digital infrastructure for actionable operational intelligence.",
        },
    ];
    return (
        <section className="tj-working-process section-gap section-gap-x">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading-wrap">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                Core Engineering Domains
                            </span>
                            <div className="heading-wrap-content">
                                <div className="sec-heading style-2">
                                    <h2 className="sec-title text-anim">
                                        Engineering Across <span style={{ color: 'var(--tj-color-theme-primary)' }}>Disciplines.</span>
                                    </h2>
                                </div>
                                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                                    Pydart integrates expertise across robotics, embedded systems, artificial intelligence and medical systems integration to build modular platforms that evolve across industries.
                                </p>
                                <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                                    <ButtonPrimary text={"Our Technology Stack"} url={"/technology"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="working-process-area">
                            {process.map((processSingle, idx) => (
                                <ProcessCard
                                    key={idx}
                                    processSingle={processSingle}
                                    idx={idx}
                                />
                            ))}
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

export default ProcessPydart;
