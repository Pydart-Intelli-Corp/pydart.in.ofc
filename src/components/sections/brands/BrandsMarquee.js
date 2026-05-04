import BrandSlider1 from "@/components/shared/brands/BrandSlider1";

const BrandsMarquee = () => {
    return (
        <section className="tj-client-section section-top-gap">
            <div className="container-fluid client-container">
                <div className="row">
                    <div className="col-12">
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <div
                                className="client-content style-2 wow fadeIn"
                                data-wow-delay=".3s"
                            >
                                <h5 className="sec-title" style={{ whiteSpace: "nowrap", marginBottom: 0, textAlign: "center" }}>
                                    Project Accepted by <span className="client-text" style={{ color: "var(--tj-color-theme-primary)" }}>Kerala Startup Mission, Startup India & Health Organizations</span>
                                </h5>
                            </div>
                        </div>
                        <BrandSlider1 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsMarquee;
