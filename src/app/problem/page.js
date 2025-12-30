import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import ProblemAnalysis from "@/components/sections/problem/ProblemAnalysis";

export const metadata = {
	title: "The Problem - Healthcare Crisis in India | Pydart Intelli Corp",
	description: "India has 1 nurse for every 670 patients. Manual patient transfers cause 60%+ musculoskeletal injuries. Discover the silent crisis in Indian healthcare and why innovation is urgently needed.",
};

export default function Problem() {
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
							title={"The Silent Crisis in Indian Healthcare"} 
							text={"Problem Analysis"} 
						/>
						<ProblemAnalysis />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
