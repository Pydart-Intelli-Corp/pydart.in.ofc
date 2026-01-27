import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import CartPrimary from "@/components/sections/cart/CartPrimary";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";

import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/contexts/CartContext";
const Cart = () => {
    return (
        <div className="ecommerce">
            <BackToTop />
            <Header />
            <Header isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        <HeroInner title={"Cart"} text={"Cart"} />
                        <CartContextProvider>
                            <CartPrimary />
                        </CartContextProvider>
                        <Cta />
                    </main>
<FooterBasic />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
};

export default Cart;
