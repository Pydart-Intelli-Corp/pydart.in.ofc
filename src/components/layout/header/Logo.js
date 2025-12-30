"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={
						(headerType === 2 ||
							headerType === 5 ||
							headerType === 7 ||
							headerType === 9) &&
						!isStickyHeader
							? "/logo/pydart_logo.png"
							: "/logo/pydart_logogb.png"
					}
					alt="PyDart Logo"
					width={544}
					height={152}
					style={{ height: "auto" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
