import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import AboutProblem from "@/components/sections/about/AboutProblem";
import BlogsGrid from "@/components/sections/blogs/BlogsGrid";
import BrandsMarquee from "@/components/sections/brands/BrandsMarquee";
import HeroSlider from "@/components/sections/hero/HeroSlider";
import Process from "@/components/sections/process/Process";
import BusinessModel from "@/components/sections/product/BusinessModel";
import DevelopmentRoadmap from "@/components/sections/product/DevelopmentRoadmap";
import SystemArchitecture from "@/components/sections/product/SystemArchitecture";
import WhatIsAltras from "@/components/sections/product/WhatIsAltras";
import WhyAltrasMatters from "@/components/sections/product/WhyAltrasMatters";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import TestimonialsCarousel from "@/components/sections/testimonials/TestimonialsCarousel";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import SplashScreen from "@/components/shared/others/SplashScreen";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
    title: "ALTRAS-1 | Pydart Intelli Corp - Robotic Patient Transfer System",
    description: "ALTRAS-1 eliminates manual lifting, reduces caregiver injuries by 93%, and enables safe single-operator transfers with Zero Relative Velocity technology.",
};

export default function AltrasOnePage() {
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
                        <HeroSlider />
                        <BrandsMarquee />
                        <WhatIsAltras />
                        <AboutProblem />
                        <WhyAltrasMatters />
                        <div style={{ marginTop: '0.75rem' }}><ServicesGrid /></div>
                        <div style={{ marginTop: '0.75rem' }}><SystemArchitecture /></div>
                        <Process />
                        <BusinessModel />
                        <DevelopmentRoadmap />
                        <TestimonialsCarousel />
                        <BlogsGrid />
                        <Cta />
                    </main>
                    <FooterBasic />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}
