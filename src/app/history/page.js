import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import AboutCompany from "@/components/sections/about/AboutCompany";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import History1 from "@/components/sections/history/History1";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Histor() {
    return (
        <div>
            <BackToTop />
            <Header />
            <Header isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        <HeroInner title={"Company History"} text={"Company History"} />
                    <AboutCompany />
                        <History1 />
                        <Cta />
                    </main>
<FooterBasic />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}
