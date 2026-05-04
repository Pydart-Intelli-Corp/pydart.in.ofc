import FooterPrimary from "@/components/layout/footer/FooterPrimary";
import Header from "@/components/layout/header/Header";
import HeroTech from "@/components/sections/hero/HeroTech";
import EcosystemPydart from "@/components/sections/process/EcosystemPydart";
import ProcessPydart from "@/components/sections/process/ProcessPydart";
import TechApproach from "@/components/sections/technology/TechApproach";
import TechStack from "@/components/sections/technology/TechStack";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
    title: "Technology - Pydart Intelli Corp | Intelligent Robotics Engineering",
    description: "Discover Pydart's layered robotics engineering architecture — combining mechanical platforms, motion control, AI intelligence, and medical monitoring systems into ALTRAS-1.",
};

export default function Technology() {
    return (
        <div>
            <BackToTop />
            <Header headerType={2} />
            <Header headerType={2} isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <HeroTech />
                        <TechApproach />
                        <TechStack />
                        <ProcessPydart />
                        <EcosystemPydart hideMissionVision largeCards />
                    </main>
                    <FooterPrimary />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}
