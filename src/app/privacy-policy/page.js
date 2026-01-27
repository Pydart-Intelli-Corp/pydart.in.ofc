import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import PrivacyPolicyPrimary from "@/components/sections/registration/PrivacyPolicyPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function PrivacyPolicy() {
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
                            title={"Privacy Policy"}
                            text={"Privacy Policy"}
                        />
                        <PrivacyPolicyPrimary />
                        <Cta 
                            title="Understand Our Terms & Conditions"
                            buttonText="View Terms"
                            buttonUrl="/terms-and-conditions"
                            image="/images/cta/cta-bg.webp"
                        />
                    </main>
                    <FooterBasic />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}