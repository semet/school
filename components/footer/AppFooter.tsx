/* eslint-disable @next/next/no-img-element */
import React from "react";

const AppFooter = () => {
	return (
		<footer
			className="footer-section"
			style={{ backgroundImage: "url(/images/bg-images/footer-bg.png)" }}
		>
			<div className="footer-top">
				<div className="container">
					<div className="row g-3 justify-content-center g-lg-0">
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="footer-top-item lab-item">
								<div className="lab-inner">
									<div className="lab-thumb">
										<img
											src="/images/footer/footer-top/01.png"
											alt="Phone-icon"
										/>
									</div>
									<div className="lab-content">
										<span>Phone Number : +88019 339 702 520</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="footer-top-item lab-item">
								<div className="lab-inner">
									<div className="lab-thumb">
										<img
											src="/images/footer/footer-top/02.png"
											alt="email-icon"
										/>
									</div>
									<div className="lab-content">
										<span>Email : admin@Hafsa.com</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="footer-top-item lab-item">
								<div className="lab-inner">
									<div className="lab-thumb">
										<img
											src="/images/footer/footer-top/03.png"
											alt="location-icon"
										/>
									</div>
									<div className="lab-content">
										<span>Address : 30 North West New York 240</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-middle padding-tb tri-shape-3">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-12">
							<div className="footer-middle-item-wrapper">
								<div className="footer-middle-item mb-5 mb-lg-0">
									<div className="fm-item-title">
										<h5>About Hafsa</h5>
									</div>
									<div className="fm-item-content">
										<p className="mb-4">
											Energistically coordinate highly efficient procesr
											partnerships befor revolutionar growth strategie
											improvement
										</p>
										<img
											src="/images/footer/footer-middle/01.jpg"
											alt="about-image"
											className="footer-abt-img"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12">
							<div className="footer-middle-item-wrapper">
								<div className="footer-middle-item mb-5 mb-lg-0">
									<div className="fm-item-title">
										<h5>our Recent news</h5>
									</div>
									<div className="fm-item-content">
										<div className="fm-item-widget lab-item">
											<div className="lab-inner">
												<div className="lab-thumb">
													<a href="#">
														<img
															src="/images/footer/footer-middle/02.jpg"
															alt="footer-widget-img"
														/>
													</a>
												</div>
												<div className="lab-content">
													<h6>
														<a href="#">
															Enable Seamin Matera Forin And Our Orthonal
															Create Vortals.
														</a>
													</h6>
													<p>July 23, 2021</p>
												</div>
											</div>
										</div>
										<div className="fm-item-widget lab-item">
											<div className="lab-inner">
												<div className="lab-thumb">
													<a href="#">
														<img
															src="/images/footer/footer-middle/03.jpg"
															alt="footer-widget-img"
														/>
													</a>
												</div>
												<div className="lab-content">
													<h6>
														<a href="#">
															Dynamca Network Otuitive Catays For
															Plagiarize Mindshare After
														</a>
													</h6>
													<p>July 23, 2021</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12">
							<div className="footer-middle-item-wrapper">
								<div className="footer-middle-item-3 mb-5 mb-lg-0">
									<div className="fm-item-title">
										<h5>OUR NEWSLETTER</h5>
									</div>
									<div className="fm-item-content">
										<p>
											Hafsa is a nonproﬁt organization supported by community
											leaders
										</p>
										<form>
											<div className="form-group">
												<input
													type="email"
													className="form-control"
													placeholder="Enter email"
												/>
											</div>
											<button type="submit" className="lab-btn">
												Send Massage <i className="icofont-paper-plane" />
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="footer-bottom-content text-center">
								<p>
									©2021 <a href="index.html">Hafsa</a> -Best For Charity HTML
									Template.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
