/* eslint-disable @next/next/no-img-element */
import React from "react";

const MobileMenu = () => {
	return (
		<div className="mobile-menu-wrapper d-flex flex-wrap align-items-center justify-content-between">
			<div className="header-bar d-lg-none">
				<span />
				<span />
				<span />
			</div>
			<div className="logo">
				<a href="index.html">
					<img src="/images/logo/01.png" alt="Abu Darda Logo" />
				</a>
			</div>
			<div className="ellepsis-bar d-lg-none">
				<i className="fas fa-ellipsis-h" />
			</div>
		</div>
	);
};

export default MobileMenu;
