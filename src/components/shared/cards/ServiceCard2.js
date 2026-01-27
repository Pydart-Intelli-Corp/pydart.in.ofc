import Link from "next/link";

const ServiceCard2 = ({ service, idx, lastItem }) => {
    const { title, desc, id, totalProject, img, svg, iconName, shortDesc } = service || {};

    return (
        <div className="service-item-wrapper tj-fadein-right-on-scroll">
            <div className="service-item style-2 ">
                <div className="title-area">
                    <div className="service-icon">
                        <i className={iconName ? iconName : "tji-service-1"}></i>
                    </div>
                    <h4 className="title">
                        <Link href={`/services/${id}`}>{title}</Link>
                    </h4>
                </div>
                <div className="service-content">
                    <p className="desc">
                        {shortDesc || desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard2;
