import React, { useEffect, useRef, useState } from "react";
import { useListener } from "react-bus";
import { getWindowSize } from "../../utils/windowSize";

const HeaderTop = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const [windowSize, setWindowSize] = useState(0);
	const [isShow, setIsShow] = useState(
		headerRef.current?.classList.contains("open") ? "block" : "none"
	);
	useListener("ellepsisToggled", () => {
		headerRef.current?.classList.toggle("open");
		headerRef.current?.classList.contains("open")
			? (headerRef.current!.style.display = "block")
			: (headerRef.current!.style.display = "none");
	});

	return (
		<div className="header-top" ref={headerRef}>
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
