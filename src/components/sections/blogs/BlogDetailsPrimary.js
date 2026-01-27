import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import makePath from "@/utils/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ option }) => {
    const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
    const { 
        title, 
        id, 
        detailsImg,
        img, 
        tags, 
        desc, 
        desc1, 
        desc2, 
        author, 
        author_role, 
        date, 
        date2,
        category,
        popupVideo,
        slider,
        comments 
    } = currentItem || {};
    
    return (
        <section className="tj-blog-section section-gap slidebar-stickiy-container">
            <div className="container">
                <div className="row row-gap-5">
                    <div className="col-lg-8">
                        <div className="post-details-wrapper">
                            <div className="blog-images wow fadeInUp" data-wow-delay=".1s">
                                <Image
                                    src={detailsImg || img || "/images/blog/blog-1.webp"}
                                    alt={title || "Blog Image"}
                                    width={870}
                                    height={450}
                                    style={{ height: "auto" }}
                                />
                            </div>
                            <h2 className="title title-anim">{title}</h2>
                            <div
                                className="blog-category-two wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <div className="category-item">
                                    <div className="cate-images">
                                        <Image
                                            src="/images/testimonial/client-2.webp"
                                            alt="Images"
                                            width={89}
                                            height={89}
                                        />
                                    </div>
                                    <div className="cate-text">
                                        <span className="degination">Authored by</span>
                                        <h6 className="title">
                                            <Link href={`/blogs/${id}`}>{author || "Author"}</Link>
                                        </h6>
                                        {author_role && <span className="role">{author_role}</span>}
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="cate-icons">
                                        <i className="tji-calendar"></i>
                                    </div>
                                    <div className="cate-text">
                                        <span className="degination">Date Released</span>
                                        <h6 className="text">{date || "Date"}</h6>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="cate-icons">
                                        <i className="tji-comment"></i>
                                    </div>
                                    <div className="cate-text">
                                        <span className="degination">Comments</span>
                                        <h6 className="text">{comments?.length || 0} Comments</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-text">
                                {desc && (
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        {desc}
                                    </p>
                                )}
                                {desc1 && (
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        {desc1}
                                    </p>
                                )}
                                {desc2 && (
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        {desc2}
                                    </p>
                                )}
                                
                                {category === "Engineering" && (
                                    <blockquote className="wow fadeInUp" data-wow-delay=".3s">
                                        <p>
                                            "Innovation in medical robotics isn't just about building machines—it's about creating solutions that enhance human capability and improve patient outcomes. Every line of code, every sensor calibration, every safety protocol serves a greater purpose: protecting lives and empowering healthcare workers."
                                        </p>
                                        <cite>Adwaith Raj, Co-Founder & CTO</cite>
                                    </blockquote>
                                )}
                                {category === "Future of Healthcare" && (
                                    <blockquote className="wow fadeInUp" data-wow-delay=".3s">
                                        <p>
                                            "The future of healthcare lies not in replacing human touch with technology, but in amplifying human capability through intelligent automation. We're building tools that allow healthcare professionals to focus on what they do best—caring for patients."
                                        </p>
                                        <cite>Tishnu Thankappan, Founder & CEO</cite>
                                    </blockquote>
                                )}
                                {category === "Healthcare Crisis" && (
                                    <blockquote className="wow fadeInUp" data-wow-delay=".3s">
                                        <p>
                                            "As healthcare professionals, we have a responsibility to protect those who dedicate their lives to caring for others. Technology should serve humanity, and in healthcare, that means ensuring our nurses and caregivers can work safely and effectively."
                                        </p>
                                        <cite>Dr. Rinu Thankappan, Co-Founder & Medical Advisor</cite>
                                    </blockquote>
                                )}
                                
                                {category === "Engineering" && (
                                    <>
                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                            Technical Implementation
                                        </h3>
                                        <p className="wow fadeInUp" data-wow-delay=".3s">
                                            Our engineering approach combines precision mechanics with intelligent software systems. The ALTRAS-1 platform represents years of research and development, focusing on real-world deployment challenges in Indian healthcare infrastructure.
                                        </p>
                                    </>
                                )}
                                
                                {category === "Future of Healthcare" && (
                                    <>
                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                            Vision for Indian Healthcare
                                        </h3>
                                        <p className="wow fadeInUp" data-wow-delay=".3s">
                                            India's healthcare transformation requires indigenous solutions that understand our unique challenges. From power fluctuations to space constraints, from multilingual requirements to budget realities—we're building technology that works for India.
                                        </p>
                                    </>
                                )}
                                
                                {category === "Healthcare Crisis" && (
                                    <>
                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                            The Path Forward
                                        </h3>
                                        <p className="wow fadeInUp" data-wow-delay=".3s">
                                            Addressing the healthcare worker crisis requires immediate action. Robotic assistance isn't a luxury—it's a necessity for protecting our healthcare workforce and ensuring quality patient care across India's diverse healthcare landscape.
                                        </p>
                                    </>
                                )}

                                <div className="images-wrap">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div
                                                className="image-box wow fadeInUp"
                                                data-wow-delay=".3s"
                                            >
                                                <Image
                                                    src="/images/blog/blog-9.webp"
                                                    alt="Image"
                                                    width={420}
                                                    height={420}
                                                    style={{ height: "auto" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div
                                                className="image-box wow fadeInUp"
                                                data-wow-delay=".5s"
                                            >
                                                <Image
                                                    src="/images/blog/blog-10.webp"
                                                    alt="Image"
                                                    width={420}
                                                    height={420}
                                                    style={{ height: "auto" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <ul className="wow fadeInUp" data-wow-delay=".3s">
                                    {category === "Engineering" && (
                                        <>
                                            <li><span><i className="tji-check"></i></span>Zero Relative Velocity Technology</li>
                                            <li><span><i className="tji-check"></i></span>Precision Motor Control</li>
                                            <li><span><i className="tji-check"></i></span>Real-time Sensor Fusion</li>
                                            <li><span><i className="tji-check"></i></span>Medical-grade Safety Circuits</li>
                                            <li><span><i className="tji-check"></i></span>Indian Infrastructure Compatibility</li>
                                            <li><span><i className="tji-check"></i></span>Multilingual Voice Interface</li>
                                            <li><span><i className="tji-check"></i></span>24/7 Operation Capability</li>
                                        </>
                                    )}
                                    {category === "Future of Healthcare" && (
                                        <>
                                            <li><span><i className="tji-check"></i></span>AI-powered Patient Monitoring</li>
                                            <li><span><i className="tji-check"></i></span>Predictive Healthcare Analytics</li>
                                            <li><span><i className="tji-check"></i></span>Robotic Assistance Integration</li>
                                            <li><span><i className="tji-check"></i></span>Indigenous Technology Development</li>
                                            <li><span><i className="tji-check"></i></span>Affordable Healthcare Solutions</li>
                                            <li><span><i className="tji-check"></i></span>Tier-2 & Tier-3 Hospital Support</li>
                                            <li><span><i className="tji-check"></i></span>Made in India Innovation</li>
                                        </>
                                    )}
                                    {category === "Healthcare Crisis" && (
                                        <>
                                            <li><span><i className="tji-check"></i></span>Nurse Safety Protection</li>
                                            <li><span><i className="tji-check"></i></span>Injury Prevention Systems</li>
                                            <li><span><i className="tji-check"></i></span>Workforce Retention</li>
                                            <li><span><i className="tji-check"></i></span>Patient Care Quality</li>
                                            <li><span><i className="tji-check"></i></span>Hospital Efficiency</li>
                                            <li><span><i className="tji-check"></i></span>Cost-effective Solutions</li>
                                            <li><span><i className="tji-check"></i></span>Scalable Implementation</li>
                                        </>
                                    )}
                                </ul>
                                
                                {popupVideo && (
                                    <div className="blog-video wow fadeInUp" data-wow-delay=".3s">
                                        <Image
                                            src="/images/blog/blog-video.webp"
                                            alt="Video"
                                            width={870}
                                            height={498}
                                            style={{ height: "auto" }}
                                        />
                                        <PopupVideo>
                                            <Link
                                                className="video-btn video-popup glightbox"
                                                href={popupVideo}
                                            >
                                                <span>
                                                    <i className="tji-play"></i>
                                                </span>
                                            </Link>
                                        </PopupVideo>
                                    </div>
                                )}
                                
                                <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                    Conclusion
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                    {category === "Engineering" && "The ALTRAS-1 system represents a breakthrough in medical robotics engineering, combining cutting-edge technology with practical deployment considerations for Indian healthcare infrastructure."}
                                    {category === "Future of Healthcare" && "The future of Indian healthcare lies in intelligent automation that amplifies human capability. By building indigenous solutions, we can create a healthcare system that serves all Indians effectively."}
                                    {category === "Healthcare Crisis" && "Protecting our healthcare workers is not just a moral imperative—it's essential for maintaining quality patient care. Robotic assistance offers a path forward to address the silent crisis in Indian healthcare."}
                                </p>
                            </div>
                            <div className="tj-tags-post wow fadeInUp" data-wow-delay=".3s">
                                <div className="tagcloud">
                                    <span>Tags:</span>
                                    {tags?.length
                                        ? tags?.map((tag, idx) => (
                                                <Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
                                                    {tag}
                                                </Link>
                                          ))
                                        : ""}
                                </div>
                                <div className="post-share">
                                    <ul>
                                        <li> Share:</li>
                                        <li>
                                            <Link href="https://www.facebook.com/" target="_blank">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://x.com/" target="_blank">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/" target="_blank">
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/" target="_blank">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="tj-post__navigation  wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div
                                    className="tj-nav__post previous"
                                    style={{ visibility: isPrevItem ? "visible" : "hidden" }}
                                >
                                    <div className="tj-nav-post__nav prev_post">
                                        <Link href={isPrevItem ? `/blogs/${prevId}` : "#"}>
                                            <span>
                                                <i className="tji-arrow-left"></i>
                                            </span>
                                            Previous
                                        </Link>
                                    </div>
                                </div>
                                <Link href={"/blogs"} className="tj-nav-post__grid">
                                    <i className="tji-window"></i>
                                </Link>
                                <div
                                    className="tj-nav__post next"
                                    style={{ visibility: isNextItem ? "visible" : "hidden" }}
                                >
                                    <div className="tj-nav-post__nav next_post">
                                        <Link href={isNextItem ? `/blogs/${nextId}` : "#"}>
                                            Next
                                            <span>
                                                <i className="tji-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="tj-comments-container">
                                <div className="tj-comments-wrap">
                                    <div className="comments-title">
                                        <h3 className="title">Comments ({comments?.length || 0})</h3>
                                    </div>
                                    <div className="tj-latest-comments">
                                        <ul>
                                            {comments?.map((comment, idx) => (
                                                <li key={idx} className="tj-comment">
                                                    <div className="comment-content">
                                                        <div className="comment-avatar">
                                                            <Image
                                                                src={comment.img || "/images/blog/avatar-1.webp"}
                                                                alt="Image"
                                                                width={64}
                                                                height={64}
                                                                style={{ height: "auto" }}
                                                            />
                                                        </div>
                                                        <div className="comments-header">
                                                            <div className="avatar-name">
                                                                <h6 className="title">
                                                                    <Link href={`/blogs/${id}`}>{comment.authorName}</Link>
                                                                </h6>
                                                            </div>
                                                            <div className="comment-text">
                                                                <span className="date">{comment.date}</span>
                                                                <Link className="reply" href={`/blogs/${id}`}>
                                                                    Reply
                                                                </Link>
                                                            </div>
                                                            <div className="desc">
                                                                <p>{comment.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {comment.replies && (
                                                        <ul className="children">
                                                            {comment.replies.map((reply, replyIdx) => (
                                                                <li key={replyIdx} className="tj-comment">
                                                                    <div className="comment-content">
                                                                        <div className="comment-avatar">
                                                                            <Image
                                                                                src={reply.img || "/images/blog/avatar-2.webp"}
                                                                                alt="Image"
                                                                                width={64}
                                                                                height={64}
                                                                                style={{ height: "auto" }}
                                                                            />
                                                                        </div>
                                                                        <div className="comments-header">
                                                                            <div className="avatar-name">
                                                                                <h6 className="title">
                                                                                    <Link href={`/blogs/${id}`}>{reply.authorName}</Link>
                                                                                </h6>
                                                                            </div>
                                                                            <div className="comment-text">
                                                                                <span className="date">{reply.date}</span>
                                                                                <Link className="reply" href={`/blogs/${id}`}>
                                                                                    Reply
                                                                                </Link>
                                                                            </div>
                                                                            <div className="desc">
                                                                                <p>{reply.desc}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="tj-comments__container">
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Comment</h3>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-input">
                                                    <textarea
                                                        id="comment"
                                                        name="message"
                                                        placeholder="Write Your Comment *"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Full Name *"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-input">
                                                    <input
                                                        type="email"
                                                        id="emailOne"
                                                        name="name"
                                                        placeholder="Your Email *"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-input">
                                                    <input
                                                        type="text"
                                                        id="website"
                                                        name="name"
                                                        placeholder="Website"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="comments-btn">
                                                <ButtonPrimary text={"Submit Now"} type={"submit"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsPrimary;