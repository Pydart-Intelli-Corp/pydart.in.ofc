import Image from "next/image";
import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import InvestorForm from "@/components/sections/contacts/InvestorForm";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
    title: "Invest in ALTRAS-1 | Pydart Intelli Corp — India's First Robotic Patient Transfer System",
    description:
        "Join us in revolutionising healthcare robotics in India. ALTRAS-1 is currently in prototype development and open for seed investment. Connect with the Pydart team to explore investment opportunities.",
};

export default function InvestorsPage() {
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
                            title="Invest in ALTRAS-1"
                            text="Investors"
                            heroImage={"/images/bg/pheader-bg.webp"}
                        />

                        {/* Investors banner image */}
                        <div className="tj-contact-area section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading text-center">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                                                <i className="tji-box"></i>Investment Opportunity
                                            </span>
                                            <h2 className="sec-title title-anim">
                                                <span>Partner</span> With Pydart
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-4">
                                    <div className="col-12 wow fadeInUp" data-wow-delay=".3s">
                                        <Image
                                            src="/images/bg/investors-banner.webp"
                                            alt="Invest in ALTRAS-1"
                                            width={1200}
                                            height={600}
                                            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <InvestorForm />
                        <div style={{ marginTop: "2rem" }}></div>
                        <Cta />
                    </main>
                    <FooterBasic />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}
