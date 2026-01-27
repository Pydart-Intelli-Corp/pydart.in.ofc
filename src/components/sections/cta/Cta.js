import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta = ({ 
    title = "Join Us in Building the Future of Healthcare Robotics.",
    buttonText = "Get in Touch",
    buttonUrl = "/contact",
    image = "/images/cta/cta-bg.webp"
}) => {
    return (
        <section className="tj-cta-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cta-area">
                            <div className="cta-content">
                                <h2 className="title title-anim">
                                    {title}
                                </h2>
                                <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                                    <ButtonPrimary
                                        text={buttonText}
                                        url={buttonUrl}
                                        className={"btn-dark"}
                                    />
                                </div>
                            </div>
                            <div className="cta-img">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
