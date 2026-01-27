import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import TermsAndConditionsPrimary from "@/components/sections/registration/TermsAndConditionsPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function TermsAndConditions() {
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
                            title={"Terms and Conditions"}
                            text={"Terms and Conditions"}
                            heroImage="/images/cta/tcta-bg.webp"
                        />
                        <TermsAndConditionsPrimary />
                        <Cta 
                            title="Learn About Our Privacy Practices"
                            buttonText="View Privacy Policy"
                            buttonUrl="/privacy-policy"
                            image="/images/bg/theader-bg.webp"
                        />
                    </main>
<FooterBasic />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}
