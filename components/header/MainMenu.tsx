import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useListener } from "react-bus";

const MainMenu = () => {
	const { status } = useSession();
	const [mobileState, setMobileState] = useState(false);
	const menuRef = useRef<HTMLUListElement>(null);
	const directoryRef = useRef<HTMLLIElement>(null);
	const userRef = useRef<HTMLLIElement>(null);
	useListener("menuToggled", () => {
		menuRef.current?.classList.toggle("active");
	});

	const toggleDirectoryDropDown = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		if (status === "authenticated") {
			userRef.current?.classList.remove("open");
			(userRef.current!.children[1] as HTMLUListElement).style.display = "none";
		}
		directoryRef.current?.classList.toggle("open");
		directoryRef.current?.classList.contains("open")
			? ((directoryRef.current!.children[1] as HTMLUListElement).style.display =
					"block")
			: ((directoryRef.current!.children[1] as HTMLUListElement).style.display =
					"none");
	};
	const toggleUserDropDown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		if (status === "authenticated" || status !== "loading") {
			directoryRef.current?.classList.remove("open");
			(directoryRef.current!.children[1] as HTMLUListElement).style.display = "none";
			userRef.current?.classList.toggle("open");
			userRef.current?.classList.contains("open")
				? ((userRef.current!.children[1] as HTMLUListElement).style.display = "block")
				: ((userRef.current!.children[1] as HTMLUListElement).style.display = "none");
		}
	};
	// useEffect(() => {}, []);

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

						<li className="menu-item-has-children" ref={directoryRef}>
							<a href="#" onClick={(e) => toggleDirectoryDropDown(e)}>
								Direktori
							</a>
							<ul className="submenu ">
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
									<Link href="/alumni">
										<a>Alumni</a>
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<a
								href="https://www.facebook.com/mts.abudarda.35/photos"
								target="blank"
							>
								Gallery
							</a>
						</li>

						<li>
							<Link href="/blog/all-posts">
								<a>Blog</a>
							</Link>
						</li>
						<li>
							<Link href="/blog/all-posts">
								<a>Contact</a>
							</Link>
						</li>
						{status === "unauthenticated" || status === "loading" ? (
							<li>
								<Link href="/auth/login">
									<a>Login</a>
								</Link>
							</li>
						) : (
							<li className="menu-item-has-children" ref={userRef}>
								<a href="#" onClick={(e) => toggleUserDropDown(e)}>
									User
								</a>
								<ul className="submenu">
									<li>
										<a href="gallery.html">Profile</a>
									</li>
									<li>
										<a
											href="#"
											onClick={(e) => {
												e.preventDefault();
												signOut();
											}}
										>
											Logout
										</a>
									</li>
								</ul>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MainMenu;
