/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const UpcomingProgram = () => {
	return (
		<div className="upcoming-programs">
			<div className="container">
				<div className="row">
					<div className="col-xl-4">
						<div className="donation-part bg-img">
							<div className="donation-content">
								<h5>Help The Poor</h5>
								<h2>Donations For The Nobel Causes</h2>
								<p>
									Give the best quality of security systems and facility of
									latest technlogy for the people get awesome.
								</p>
								<a href="#" className="lab-btn">
									See All Causes <i className="icofont-heart-alt" />
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-8">
						<div className="programs-item-part">
							<div className="program-desc d-flex justify-content-between">
								<p>
									We offer security solutions and cost effective service for our
									client are safe and secure in any situation.
								</p>
								<ul className="lab-ul">
									<li>
										<a
											href="#"
											className="program-next"
											onClick={(e) => e.preventDefault()}
										>
											<i className="icofont-arrow-left" />
										</a>
									</li>
									<li>
										<a
											href="#"
											className="program-prev"
											onClick={(e) => e.preventDefault()}
										>
											<i className="icofont-arrow-right" />
										</a>
									</li>
								</ul>
							</div>
							<div className="program-item-container">
								<Swiper
									className="program-item-wrapper"
									modules={[Navigation]}
									slidesPerView={2}
									spaceBetween={20}
									loop={true}
									autoplay={{
										delay: 5000,
										disableOnInteraction: true,
									}}
									navigation={{
										nextEl: ".program-next",
										prevEl: ".program-prev",
									}}
									breakpoints={{
										// when window width is >= 768px
										768: {
											width: 768,
											slidesPerView: 2,
										},
									}}
								>
									<div className="swiper-wrapper">
										<SwiperSlide className="swiper-slide">
											<div className="program-item">
												<div className="lab-inner">
													<div className="lab-thumb">
														<a href="#">
															<img
																src="/images/program/02.jpg"
																alt="program-image"
															/>
														</a>
														<div className="lab-thumb-content">
															<div className="progress-item">
																<ul className="progress-item-status lab-ul d-flex justify-content-between mb-2">
																	<li>
																		Raised<span> $24,000</span>
																	</li>
																	<li>
																		Gold<span> $34,900</span>
																	</li>
																</ul>
																<div
																	className="progress-bar-wrapper progress"
																	data-percent="50%"
																>
																	<div className="progress-bar progress-bar-striped progress-bar-animated" />
																</div>
																<div className="progress-bar-percent d-flex align-items-center justify-content-center">
																	50 <sup>%</sup>
																</div>
															</div>
														</div>
													</div>
													<div className="lab-content">
														<span>food distribution</span>
														<h5>
															<a href="#">
																American Muslim: Choosing Remain Still
																This Ramadan
															</a>
														</h5>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="program-item">
												<div className="lab-inner">
													<div className="lab-thumb">
														<a href="#">
															<img
																src="/images/program/03.jpg"
																alt="program-image"
															/>
														</a>
														<div className="lab-thumb-content">
															<div className="progress-item">
																<ul className="progress-item-status lab-ul d-flex justify-content-between mb-2">
																	<li>
																		Raised<span> $24,000</span>
																	</li>
																	<li>
																		Gold<span> $34,900</span>
																	</li>
																</ul>
																<div
																	className="progress-bar-wrapper progress"
																	data-percent="70%"
																>
																	<div className="progress-bar progress-bar-striped progress-bar-animated" />
																</div>
																<div className="progress-bar-percent d-flex align-items-center justify-content-center">
																	70 <sup>%</sup>
																</div>
															</div>
														</div>
													</div>
													<div className="lab-content">
														<span>food distribution</span>
														<h5>
															<a href="#">
																How to Teach The Kids Ramadan Isn’t About
																Food
															</a>
														</h5>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpcomingProgram;
