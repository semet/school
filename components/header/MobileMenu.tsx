/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { useBus } from "react-bus";

const MobileMenu = () => {
	const headerBar = useRef<HTMLDivElement>(null);
	const bus = useBus();

	const handleBarClick = () => {
		headerBar.current?.classList.toggle("active");
		bus.emit("menuToggled");
	};

	const handleEllepsisClick = () => {
		bus.emit("ellepsisToggled");
	};
	return (
		<div className="mobile-menu-wrapper d-flex flex-wrap align-items-center justify-content-between">
			<div
				className="header-bar d-lg-none"
				onClick={() => handleBarClick()}
				ref={headerBar}
			>
				<span />
				<span />
				<span />
			</div>
			<div className="logo">
				<a href="index.html">
					<img src="/images/logo/01.png" alt="Abu Darda Logo" />
				</a>
			</div>
			<div className="ellepsis-bar d-lg-none" onClick={() => handleEllepsisClick()}>
				<i className="fas fa-ellipsis-h" />
			</div>
		</div>
	);
};

export default MobileMenu;
