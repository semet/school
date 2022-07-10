import React from "react";
import HeaderTop from "./HeaderTop";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

const MainHeader = () => {
	return (
		<header className="header-3 pattern-1">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-xl-3 col-12">
						{/* Mobile Menu */}
						<MobileMenu />
						{/*  */}
					</div>
					<div className="col-xl-9 col-12">
						{/*  */}
						<HeaderTop />
						{/*  */}
						<MainMenu />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
