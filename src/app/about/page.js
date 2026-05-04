import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import AboutCompany from "@/components/sections/about/AboutCompany";
import EngineeringPhilosophy from "@/components/sections/about/EngineeringPhilosophy";
import Partnerships from "@/components/sections/about/Partnerships";
import BrandsBasic from "@/components/sections/brands/BrandsBasic";
import Cta from "@/components/sections/cta/Cta";
import EcosystemAbout from "@/components/sections/about/EcosystemAbout";
import FaqAccordion from "@/components/sections/faq/FaqAccordion";
import Features from "@/components/sections/features/Features";
import HeroAbout from "@/components/sections/hero/HeroAbout";
import TeamGrid from "@/components/sections/teams/TeamGrid";
import TestimonialsCarousel from "@/components/sections/testimonials/TestimonialsCarousel";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
    title: "About Us - Pydart Intelli Corp | Engineering Compassionate Care",
    description: "Founded in 2026, Pydart Intelli Corp bridges advanced robotics with real-world clinical needs to eliminate preventable injuries and restore dignity to patient movement.",
};

export default function About() {
    return (
        <div>
            <BackToTop />
            <Header headerType={2} />
            <Header headerType={2} isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <HeroAbout />
                        <Features type={2} />
                        <AboutCompany type={2} />
                        <EngineeringPhilosophy />
                        <EcosystemAbout />
                        <Partnerships />
                        <BrandsBasic type={2} />
                        <TestimonialsCarousel type={2} />
                        <TeamGrid type={3} />
                        <FaqAccordion type={3} />
                        <Cta />
                    </main>
                    <FooterBasic />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}
