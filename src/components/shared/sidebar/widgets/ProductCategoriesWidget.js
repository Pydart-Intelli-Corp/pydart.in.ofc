import countDataLength from "@/utils/countDataLength";
import filterItems from "@/utils/filterItems";
import getProductCategories from "@/utils/getProductCategories";
import getProducts from "@/utils/getProducts";
import makePath from "@/utils/makePath";
import Link from "next/link";

const ProductCategoriesWidget = () => {
    const categories = getProductCategories();
    const items = getProducts();
    return (
        <div className="product-widget  widget_product_categories">
            <h5 className="product-widget-title">Categories</h5>
            <ul className="product-categories">
                {categories?.length
                    ? categories?.map((category, idx) => (
                            <li key={idx}>
                                <Link href={`/shop?category=${makePath(category)}`}>
                                    {category}
                                </Link>{" "}
                                (
                                {countDataLength(
                                    filterItems(items, "category", makePath(category))
                                )}
                                )
                            </li>
                      ))
                    : ""}
            </ul>
        </div>
    );
};

export default ProductCategoriesWidget;
