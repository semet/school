import React, { useEffect, useRef, useState } from "react";
import { useListener } from "react-bus";
import { getWindowSize } from "../../utils/windowSize";

const HeaderTop = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const [isShow, setIsShow] = useState("");
	const [windowSize, setWindowSize] = useState(0);
	useListener("ellepsisToggled", () => {
		headerRef.current?.classList.toggle("open");
		isShow === "none" ? setIsShow("block") : setIsShow("none");
	});

	useEffect(() => {
		const { innerWidth } = window;

		const handleWindowResize = () => {
			setWindowSize(innerWidth);
		};
		window.addEventListener("resize", handleWindowResize);
		windowSize >= 990 ? setIsShow("block") : setIsShow("none");

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [windowSize]);
	return (
		<div className="header-top open" style={{ display: `${isShow}` }} ref={headerRef}>
			<div className="header-top-area">
				<ul className="left lab-ul">
					<li>
						<i className="icofont-ui-call" />
						<span>+800-123-4567 6587</span>
					</li>
					<li>
						<i className="fas fa-map-marker-alt" /> Beverley, New York 224 US
					</li>
				</ul>
				<ul className="social-icons lab-ul d-flex">
					<li>
						<a href="#">
							<i className="fab fa-facebook-messenger" />
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fab fa-twitter" />
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fab fa-vimeo-v" />
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fab fa-skype" />
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fas fa-wifi" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HeaderTop;
