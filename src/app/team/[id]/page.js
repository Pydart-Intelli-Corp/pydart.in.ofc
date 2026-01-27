import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import TeamDetails from "@/components/sections/teams/TeamDetails";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getTeamMembers from "@/utils/getTeamMembers";
import { notFound } from "next/navigation";
const items = getTeamMembers();

export default async function TeamMemberDetails({ params }) {
    const { id } = await params;

    const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
    if (!isExistItem) {
        notFound();
    }
    return (
        <div>
            <BackToTop />
            <Header />
            <Header isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        <HeroInner title={"Team details"} text={"Team details"} />
                    <TeamDetails currentItemId={parseInt(id)} />
                        <Cta />
                    </main>
                <FooterBasic />
            </div>
        </div>
        <ClientWrapper />
    </div>
    );
}
export async function generateStaticParams() {
    return items?.map(({ id }) => ({ id: id.toString() }));
}
