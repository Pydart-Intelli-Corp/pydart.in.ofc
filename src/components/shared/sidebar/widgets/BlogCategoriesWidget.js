import countDataLength from "@/utils/countDataLength";
import filterItems from "@/utils/filterItems";
import getBlogCategories from "@/utils/getBlogCategories";
import getBlogs from "@/utils/getBlogs";
import makePath from "@/utils/makePath";
import modifyNumber from "@/utils/modifyNumber";
import Link from "next/link";

const BlogCategoriesWidget = () => {
    const categories = getBlogCategories();
    const blogs = getBlogs();
    return (
        <div className="tj-sidebar-widget widget-categories">
            <h4 className="widget-title">Categories</h4>
            <ul>
                {categories?.length
                    ? categories?.map((category, idx) => (
                            <li key={idx}>
                                <Link href={`/blogs?category=${makePath(category)}`}>
                                    {category}{" "}
                                    <span className="number">
                                        (
                                        {modifyNumber(
                                            countDataLength(
                                                filterItems(blogs, "category", makePath(category))
                                            )
                                        )}
                                        )
                                    </span>
                                </Link>{" "}
                            </li>
                      ))
                    : ""}
            </ul>
        </div>
    );
};

export default BlogCategoriesWidget;
