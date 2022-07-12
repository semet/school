import Link from "next/link";
import React, { useRef } from "react";
import { useListener } from "react-bus";

const MainMenu = () => {
	const menuRef = useRef<HTMLUListElement>(null);
	useListener("menuToggled", () => {
		menuRef.current?.classList.toggle("active");
	});

	return (
		<div className="header-bottom">
			<div className="header-wrapper">
				<div className="menu-area justify-content-between w-100">
					<ul className="menu lab-ul" ref={menuRef}>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>Tentang</a>
							</Link>
						</li>
						<li>
							<Link href="/event">
								<a>Events</a>
							</Link>
						</li>

						<li className="menu-item-has-children">
							<a href="#">Warga Sekolah</a>
							<ul className="submenu">
								<li>
									<Link href="/teacher">
										<a>Guru</a>
									</Link>
								</li>
								<li>
									<Link href="/student">
										<a>Siswa</a>
									</Link>
								</li>
								<li>
									<a href="program-single.html">Alumni</a>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children">
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
