"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/inputs/ReactNiceSelect";

const PYDART_EMAIL = "info@pydart.com";
const gmailComposeUrl = (subject, body) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PYDART_EMAIL)}` +
    (subject ? `&su=${encodeURIComponent(subject)}` : "") +
    (body ? `&body=${encodeURIComponent(body)}` : "");

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.cfName2.value.trim();
        const email = form.cfEmail2.value.trim();
        const phone = form.cfPhone2.value.trim();
        const message = form.cfMessage2.value.trim();

        const subject = `Contact Form Enquiry from ${name || "Website Visitor"}`;
        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

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
                                        <a href="tel:7356765036">P: 7356765036</a>
                                        <a
                                            href={gmailComposeUrl()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            M: info@pydart.com
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
                                    <i className="tji-box"></i>Get in Touch
                                </span>
                                <h2 className="sec-title title-anim">
                                    Drop Us a <span>Line.</span>
                                </h2>
                            </div>
                            <form id="contact-form-2" onSubmit={handleSubmit}>
                                <div className="row wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="text"
                                                name="cfName2"
                                                placeholder="Full Name *"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="email"
                                                name="cfEmail2"
                                                placeholder="Email Address *"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="tel"
                                                name="cfPhone2"
                                                placeholder="Phone number *"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <div className="tj-nice-select-box">
                                                <div className="tj-select">
                                                    <ReactNiceSelect
                                                        selectedIndex={0}
                                                        options={[
                                                            { value: "0", optionName: "Chose a option" },
                                                            { value: "1", optionName: "Business Strategy" },
                                                            { value: "2", optionName: "Customer Experience" },
                                                            {
                                                                value: "3",
                                                                optionName: "Sustainability and ESG",
                                                            },
                                                            {
                                                                value: "4",
                                                                optionName: "Training and Development",
                                                            },
                                                            {
                                                                value: "5",
                                                                optionName: "IT Support & Maintenance",
                                                            },
                                                            {
                                                                value: "6",
                                                                optionName: "Marketing Strategy",
                                                            },
                                                        ]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input message-input">
                                            <textarea
                                                name="cfMessage2"
                                                id="message"
                                                placeholder="Type message *"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <ButtonPrimary text={"Send Message"} type={"submit"} />
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

export default ContactForm;
