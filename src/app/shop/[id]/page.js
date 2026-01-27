import FooterBasic from "@/components/layout/footer/FooterBasic";
import Header from "@/components/layout/header/Header";
import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/contexts/CartContext";
import WishlistContextProvider from "@/contexts/WishlistContext";
import getProducts from "@/utils/getProducts";
import { notFound } from "next/navigation";
const items = getProducts();
export default async function ProductDetails({ params }) {
    const { id } = await params;
    const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
    if (!isExistItem) {
        notFound();
    }
    return (
        <div className="ecommerce">
            <BackToTop />
            <Header />
            <Header isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        <CartContextProvider>
                            <WishlistContextProvider>
                                <ProductDetailsMain currentItemId={parseInt(id)} />
                            </WishlistContextProvider>
                        </CartContextProvider>
                        <Cta />
                    </main>
                <FooterBasic />
            </div>
        </div>
        </div>
    );
}

export async function generateStaticParams() {
    return items?.map(({ id }) => ({ id: id.toString() }));
}
