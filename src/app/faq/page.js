import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import FaqAccordion from "@/components/sections/faq/FaqAccordion";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Faq() {
    return (
        <div>
            <BackToTop />
            <Header />
            <Header isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        <HeroInner title={"Faq"} text={"Faq"} />
                    <FaqAccordion type={4} />
                    <Cta />
                </main>
                <FooterBasic />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}
