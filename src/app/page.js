import FooterPrimary from "@/components/layout/footer/FooterPrimary";
import Header from "@/components/layout/header/Header";
import AboutProblem from "@/components/sections/about/AboutProblem";
import BlogsGrid from "@/components/sections/blogs/BlogsGrid";
import BrandsMarquee from "@/components/sections/brands/BrandsMarquee";
import HeroSlider from "@/components/sections/hero/HeroSlider";
import PortfoliosGrid from "@/components/sections/portfolios/PortfoliosGrid";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import Process from "@/components/sections/process/Process";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import TeamGrid from "@/components/sections/teams/TeamGrid";
import TestimonialsCarousel from "@/components/sections/testimonials/TestimonialsCarousel";
import BackToTop from "@/components/shared/others/BackToTop";
import SplashScreen from "@/components/shared/others/SplashScreen";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import ComingSoon from "./coming-soon/page";

// 🎚️ TOGGLE CONTROL: Set to true for Coming Soon page, false for Main Landing page
const SHOW_COMING_SOON = true;

export const metadata = {
    title: "Pydart Intelli Corp - ALTRAS-1 Robotic Patient Transfer System",
    description: "Transforming patient care through robotics. ALTRAS-1 eliminates manual lifting, reduces caregiver injuries by 93%, and enables safe single-operator transfers with Zero Relative Velocity technology.",
};

export default function Home() {
    // Show Coming Soon page if enabled
    if (SHOW_COMING_SOON) {
        return <ComingSoon />;
    }

    // Show Main Landing page
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
                        <AboutProblem />
                        <ServicesGrid />
                        <PortfoliosGrid />
                        <Process />
                        <TestimonialsCarousel />
                        {/* <TeamGrid /> */}
                        {/* <PricingPlan /> */}
                        <BlogsGrid />
                    </main>
                    <FooterPrimary />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}
