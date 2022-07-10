import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import AppFooter from "../footer/AppFooter";
import MainHeader from "../header/MainHeader";
import Preloader from "../partials/Preloader";
import ScrollToTop from "../partials/ScrollToTop";

interface Props {
	children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
	const [showLoader, setShowLoader] = useState(true);
	const fadeOut = () => {
		setShowLoader(false);
	};

	useEffect(() => {
		const timeOut = setTimeout(fadeOut, 1000);
		return () => {
			clearTimeout(timeOut);
		};
	});
	return (
		<Fragment>
			{/* Preloader */}
			{showLoader && <Preloader />}
			{/* Main Header */}
			<MainHeader />
			{children}
			{/* Footer */}
			<AppFooter />
			<ScrollToTop />
		</Fragment>
	);
};

export default MainLayout;
