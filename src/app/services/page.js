import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import BrandsBasic from "@/components/sections/brands/BrandsBasic";
import ContactForm from "@/components/sections/contacts/ContactForm";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Services() {
    return (
        <div>
            <BackToTop />
            <Header />
            <Header isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        <HeroInner title={"Services"} text={"Services"} heroImage={"/images/bg/services-banner.webp"} />
                        <ServicesPrimary />
                        <ContactForm />
                        <PricingPlan type={3} />
                        <BrandsBasic type={2} />
                        <Cta />
                    </main>
                    <FooterBasic />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}
