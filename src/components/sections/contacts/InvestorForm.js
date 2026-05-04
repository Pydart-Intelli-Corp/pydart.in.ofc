"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const PYDART_EMAIL = "info@pydart.com";
const gmailComposeUrl = (subject, body) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PYDART_EMAIL)}` +
    (subject ? `&su=${encodeURIComponent(subject)}` : "") +
    (body ? `&body=${encodeURIComponent(body)}` : "");

const InvestorForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.invName.value.trim();
        const email = form.invEmail.value.trim();
        const phone = form.invPhone.value.trim();
        const message = form.invMessage.value.trim();

        const subject = "Investor Enquiry — ALTRAS-1 | Pydart Intelli Corp";
        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `\nMessage / Questions:\n${message}`;

        window.open(gmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
    };

    return (
        <section className="tj-contact-section section-gap section-gap-x">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="global-map wow fadeInUp" data-wow-delay=".3s">
                            <div className="global-map-img">
                                <img src="/images/bg/map.svg" alt="Image" />
                                <div className="location-indicator loc-1">
                                    <div className="location-tooltip">
                                        <span>Head office:</span>
                                        <p>Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, HMT Colony, P.O, Kalamassery, Kochi, Kerala 683503</p>
                                        <a href="tel:+917356765036">P: +91 7356765036</a>
                                        <a
                                            href={gmailComposeUrl()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            M: Info@pydart.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="contact-form style-2 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="sec-heading">
                                <span className="sub-title text-white">
                                    <i className="tji-box"></i>Investor Enquiry
                                </span>
                                <h2 className="sec-title title-anim">
                                    Let&#39;s <span>Connect.</span>
                                </h2>
                            </div>
                            <form id="investor-form" onSubmit={handleSubmit}>
                                <div className="row wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="text"
                                                name="invName"
                                                placeholder="Full Name *"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="email"
                                                name="invEmail"
                                                placeholder="Email Address *"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input">
                                            <input
                                                type="tel"
                                                name="invPhone"
                                                placeholder="Phone Number *"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input message-input">
                                            <textarea
                                                name="invMessage"
                                                id="inv-message"
                                                placeholder="Your message or questions *"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <ButtonPrimary text={"Send Enquiry"} type={"submit"} />
                                    </div>
                                </div>
                            </form>
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

export default InvestorForm;
