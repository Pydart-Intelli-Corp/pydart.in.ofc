import HeroInner from "@/components/sections/hero/HeroInner";
import PortfolioDetailsPrimary from "@/components/sections/portfolios/PortfolioDetailsPrimary";
import getPortfolio from "@/utils/getPortfolio";
import getPreviousNextItem from "@/utils/getPreviousNextItem";

const PortfolioDetailsMain = ({ currentItemId }) => {
    const items = getPortfolio();
    const currentId = currentItemId;
    const option = getPreviousNextItem(items, currentId);
    const { title } = option?.currentItem || {};
    return (
        <div>
            <HeroInner
                title={title ? title : "Portfolio details"}
                text={title ? title : "Portfolio details"}
                breadcrums={[{ name: "Portfolio", path: "/portfolios" }]}
                noNeedTitleAnim={true}
            />
            <PortfolioDetailsPrimary option={option} />
        </div>
    );
};

export default PortfolioDetailsMain;
