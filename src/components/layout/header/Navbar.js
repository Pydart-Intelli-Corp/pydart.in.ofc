import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/utils/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
    const makeActiveLink = useActiveLink();
    const navItems = (getNavItems() || []).map(item => makeActiveLink(item));

    return (
        <div className="menu-area d-none d-lg-inline-flex align-items-center">
            <nav id="mobile-menu" className="mainmenu">
                <ul>
                    {navItems.map((navItem, idx) =>
                        navItem?.submenu?.length ? (
                            <li
                                key={idx}
                                className={`has-dropdown ${navItem?.isActive ? "current-menu-ancestor" : ""}`}
                            >
                                <Link href={navItem?.path ? navItem?.path : "#"}>
                                    {navItem?.name}
                                </Link>
                                <ul className="sub-menu">
                                    {navItem.submenu.map((item, idx2) => (
                                        <li
                                            key={idx2}
                                            className={item?.isActive ? "current-menu-item" : ""}
                                        >
                                            <Link href={item?.path ? item?.path : "/"}>
                                                {item?.name}
                                                {item?.badge ? (
                                                    <span className="mega-menu-badge tj-zoom-in-out-anim">
                                                        {item.badge}
                                                    </span>
                                                ) : ""}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li
                                key={idx}
                                className={navItem?.isActive ? "current-menu-ancestor" : ""}
                            >
                                <Link href={navItem?.path ? navItem?.path : "#"}>
                                    {navItem?.name}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
