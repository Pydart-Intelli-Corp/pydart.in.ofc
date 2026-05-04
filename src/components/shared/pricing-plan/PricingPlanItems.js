import ButtonPrimary from "../buttons/ButtonPrimary";

const businessModels = [
    {
        name: "Equipment Sales",
        desc: "Direct purchase for permanent hospital deployment",
        price: "₹50,000 – ₹1,50,000",
        period: "per unit",
        active: true,
        features: [
            "Full ALTRAS-1 system ownership",
            "One-time capital investment",
            "Suitable for large hospitals & chains",
            "Includes installation & commissioning",
            "Software & firmware updates",
            "Warranty coverage included",
        ],
    },
    {
        name: "Service & Maintenance",
        desc: "Annual monitoring & reliability assurance",
        price: "₹15,000",
        period: "per year",
        active: false,
        features: [
            "Preventive maintenance visits",
            "Remote system diagnostics",
            "Spare parts priority access",
            "24/7 technical support",
            "Performance & uptime reports",
            "Software update management",
        ],
    },
    {
        name: "Leasing Model",
        desc: "Flexible deployment with no large upfront cost",
        price: "Flexible",
        period: "terms",
        active: false,
        features: [
            "Zero large upfront capital required",
            "Ideal for mid-size & budget hospitals",
            "Maintenance included in lease",
            "Upgrade options at lease renewal",
            "Scalable across multiple units",
            "Customisable lease duration",
        ],
    },
];

const PricingPlanItems = ({ isYearlyPlan, type }) => {
    if (type === 3) {
        return (
            <>
                {businessModels.map((model, idx) => (
                    <div key={idx} className="col-xl-4 col-md-6">
                        <div
                            className={`pricing-box wow fadeInUp${model.active ? " active" : ""}`}
                            data-wow-delay={`${0.5 + idx * 0.2}s`}
                        >
                            <div className="pricing-header">
                                <h4 className="package-name">{model.name}</h4>
                                <div className="package-desc">
                                    <p>{model.desc}</p>
                                </div>
                                <div className="package-price">
                                    <span className="price-number" style={{ fontSize: '1.5rem', whiteSpace: 'nowrap' }}>{model.price}</span>
                                    <span className="package-period">/{model.period}</span>
                                </div>
                                <div className="pricing-btn">
                                    <ButtonPrimary
                                        text={"Contact Us"}
                                        url={"/contact"}
                                        isTextBtn={true}
                                    />
                                </div>
                            </div>
                            <div className="list-items">
                                <ul>
                                    {model.features.map((feat, fIdx) => (
                                        <li key={fIdx}>
                                            <i className="tji-list"></i>{feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    return (
        <>
            <div className="col-xl-4 col-md-6">
                <div className="pricing-box wow fadeInUp" data-wow-delay=".5s">
                    <div className="pricing-header">
                        <h4 className="package-name">Basic Plan</h4>
                        <div className="package-desc">
                            <p>Essential Business Services</p>
                        </div>
                        <div className="package-price">
                            <span className="package-currency">$</span>
                            <span className="price-number">99</span>
                            <span className="package-period">/per month</span>
                        </div>
                        <div className="pricing-btn">
                            <ButtonPrimary
                                text={"Chose Plan"}
                                url={"/contact"}
                                isTextBtn={true}
                            />
                        </div>
                    </div>
                    <div className="list-items">
                        <ul>
                            <li>
                                <i className="tji-list"></i>Access to core services
                            </li>
                            <li>
                                <i className="tji-list"></i>Limited customer support (email)
                            </li>
                            <li>
                                <i className="tji-list"></i>1 project per month
                            </li>
                            <li>
                                <i className="tji-list"></i>Basic reporting and analytics
                            </li>
                            <li>
                                <i className="tji-list"></i>Standard templates and tools
                            </li>
                            <li>
                                <i className="tji-list"></i>Basic performance tracking
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="pricing-box active wow fadeInUp" data-wow-delay=".7s">
                    <div className="pricing-header">
                        <h4 className="package-name">Standard Plan</h4>
                        <div className="package-desc">
                            <p>Complete Business Solutions</p>
                        </div>
                        <div className="package-price">
                            <span className="package-currency">$</span>
                            <span className="price-number">249</span>
                            <span className="package-period">/per month</span>
                        </div>
                        <div className="pricing-btn">
                            <ButtonPrimary
                                text={"Chose Plan"}
                                url={"/contact"}
                                isTextBtn={true}
                            />
                        </div>
                    </div>
                    <div className="list-items">
                        <ul>
                            <li>
                                <i className="tji-list"></i>All features in Basic Plan
                            </li>
                            <li>
                                <i className="tji-list"></i>Priority customer support
                            </li>
                            <li>
                                <i className="tji-list"></i>Up to 3 projects per month
                            </li>
                            <li>
                                <i className="tji-list"></i>Monthly performance reviews
                            </li>
                            <li>
                                <i className="tji-list"></i>Collaboration tools for team
                            </li>
                            <li>
                                <i className="tji-list"></i>Custom templates
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="pricing-box wow fadeInUp" data-wow-delay=".9s">
                    <div className="pricing-header">
                        <h4 className="package-name">Premium Plan</h4>
                        <div className="package-desc">
                            <p>Advanced Business Services</p>
                        </div>
                        <div className="package-price">
                            <span className="package-currency">$</span>
                            <span className="price-number">499</span>
                            <span className="package-period">/per month</span>
                        </div>
                        <div className="pricing-btn">
                            <ButtonPrimary
                                text={"Chose Plan"}
                                url={"/contact"}
                                isTextBtn={true}
                            />
                        </div>
                    </div>
                    <div className="list-items">
                        <ul>
                            <li>
                                <i className="tji-list"></i>All features in Standard Plan
                            </li>
                            <li>
                                <i className="tji-list"></i>Dedicated account manager
                            </li>
                            <li>
                                <i className="tji-list"></i>Tailored strategy sessions
                            </li>
                            <li>
                                <i className="tji-list"></i>Quarterly performance audits
                            </li>
                            <li>
                                <i className="tji-list"></i>Priority support
                            </li>
                            <li>
                                <i className="tji-list"></i>24/7 emergency service
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPlanItems;

