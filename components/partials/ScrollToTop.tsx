import React, { Fragment, useEffect, useState } from "react";

const ScrollToTop = () => {
	const [bottomPosition, setBottomPosition] = useState("");
	const [opacity, setOpacity] = useState("");
	const [transition, setTransition] = useState("");

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setBottomPosition("2%");
			setOpacity("1");
			setTransition("all .5s ease");
		} else {
			setBottomPosition("-30%");
			setOpacity("0");
			setTransition("all .5s ease");
		}
	};

	const clickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	return (
		// style="bottom: -30%; opacity: 0; transition: all 0.5s ease 0s;"
		<a
			href="#"
			onClick={(e) => clickHandler}
			className="scrollToTop"
			style={{
				bottom: `${bottomPosition}`,
				opacity: `${opacity}`,
				transition: `${transition}`,
			}}
		>
			<i className="icofont-bubble-up" />
			<span className="pluse_1" />
			<span className="pluse_2" />
		</a>
	);
};

export default ScrollToTop;
