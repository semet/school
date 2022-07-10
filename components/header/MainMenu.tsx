import React from "react";

const MainMenu = () => {
	return (
		<div className="header-bottom">
			<div className="header-wrapper">
				<div className="menu-area justify-content-between w-100">
					<ul className="menu lab-ul">
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>
							<a href="about.html">About</a>
						</li>
						<li>
							<a href="#0">Events</a>
							<ul className="submenu">
								<li>
									<a href="events.html">Events</a>
								</li>
								<li>
									<a href="events-single.html">Events Single</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#0">Programs</a>
							<ul className="submenu">
								<li>
									<a href="programs.html">Programs</a>
								</li>
								<li>
									<a href="program-single.html">Program Single</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#0">Pages</a>
							<ul className="submenu">
								<li>
									<a href="gallery.html">Gallery</a>
								</li>
								<li>
									<a href="#0">Scholars</a>
									<ul className="submenu">
										<li>
											<a href="scholar.html">Our Scholars</a>
										</li>
										<li>
											<a href="scholar-single.html">Scholar Single</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#0">Blog</a>
									<ul className="submenu">
										<li>
											<a href="blog.html">blog</a>
										</li>
										<li>
											<a href="blog-single.html">Blog Single</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="sermons.html">Sermons</a>
								</li>
								<li>
									<a href="services.html">Service</a>
								</li>
								<li>
									<a href="404.html">404 Error</a>
								</li>
								<li>
									<a href="coming-soon.html">Coming-soon</a>
								</li>
								<li>
									<a href="registration.html">Registration</a>
								</li>
								<li>
									<a href="login.html">Login</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="contact.html">Contact</a>
						</li>
					</ul>
					<div className="prayer-time d-none d-lg-block">
						<a href="#" className="prayer-time-btn">
							<i className="icofont-clock-time" /> Today Prayer Time
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainMenu;
