import BlogDetailsPrimary from "@/components/sections/blogs/BlogDetailsPrimary";
import HeroInner from "@/components/sections/hero/HeroInner";
import getBlogs from "@/utils/getBlogs";
import getPreviousNextItem from "@/utils/getPreviousNextItem";
const BlogDetailsMain = ({ currentItemId }) => {
    const items = getBlogs();
    const currentId = currentItemId;
    const option = getPreviousNextItem(items, currentId);
    const { title } = option?.currentItem || {};
    return (
        <div>
            <HeroInner
                title={"Blog Details"}
                text={title ? title : "Blog Details"}
                breadcrums={[{ name: "Blogs", path: "/blogs" }]}
            />
            <BlogDetailsPrimary option={option} />
        </div>
    );
};

export default BlogDetailsMain;
