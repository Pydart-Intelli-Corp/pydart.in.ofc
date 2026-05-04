import FooterPrimary from "@/components/layout/footer/FooterPrimary";
import Header from "@/components/layout/header/Header";
import AboutPydart from "@/components/sections/about/AboutPydart";
import AltrasIntro from "@/components/sections/about/AltrasIntro";
import BrandsMarquee from "@/components/sections/brands/BrandsMarquee";
import HeroSliderPydart from "@/components/sections/hero/HeroSliderPydart";
import PortfoliosGrid from "@/components/sections/portfolios/PortfoliosGrid";
import EcosystemPydart from "@/components/sections/process/EcosystemPydart";
import ServicesGridPydart from "@/components/sections/services/ServicesGridPydart";
import BackToTop from "@/components/shared/others/BackToTop";
import SplashScreen from "@/components/shared/others/SplashScreen";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
    title: "Pydart Intellicorp - Robotics Built for Real-World Impact",
    description: "Pydart Intellicorp is a deep-technology robotics and intelligent automation company. ALTRAS-1, our first deployment platform, brings AI-enabled robotic patient transfer into healthcare.",
};

export default function Home() {
    return (
        <div>
            <SplashScreen />
            <BackToTop />
            <Header headerType={2} />
            <Header headerType={2} isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <HeroSliderPydart />
                        <AboutPydart hideStats={true} isHomePage={true} />
                        <AltrasIntro />
                        <div style={{ marginTop: '0.75rem' }}><ServicesGridPydart /></div>
                        <PortfoliosGrid />
                        <div style={{ marginTop: '0.75rem' }}><EcosystemPydart /></div>
                    </main>
                    <FooterPrimary />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}
