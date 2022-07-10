import React from "react";

const HeaderTop = () => {
	return (
		<div className="header-top">
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