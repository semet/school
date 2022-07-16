import { useRouter } from "next/router";
import React from "react";
import HeaderTop from "./HeaderTop";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

const MainHeader = () => {
	return (
		<header className="header-3 pattern-1">
			{/* <div className="alert alert-info text-center">
				<strong>Penerimaan siswa baru sudah dibuka!</strong> Klik{" "}
				<a href="" className="text-danger">
					link ini
				</a>{" "}
				untuk mendaftar
			</div> */}
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
