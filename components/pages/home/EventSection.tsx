/* eslint-disable @next/next/no-img-element */
import React from "react";

const EventSection = () => {
	return (
		<section className="event-section padding-tb padding-b shape-4">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="header-title">
							<h5>Upcoming Events</h5>
							<h2>Ethical And Moral Beliefs That Guides To The Straight Path!</h2>
						</div>
					</div>
					<div className="col-12">
						<div className="event-content">
							<div className="event-top tri-shape-2 pattern-2">
								<div className="event-top-thumb">
									<img src="/images/event/01.jpg" alt="Upcoming-event" />
								</div>
								<div className="event-top-content">
									<div className="event-top-content-wrapper">
										<h3>
											<a href="#">
												Helping Hands For Poor People Marriage Event
											</a>
										</h3>
										<div className="date-count-wrapper">
											<ul className="lab-ul event-date">
												<li>
													<i className="icofont-calendar" />
													<span>December 24,2021</span>
												</li>
												<li>
													<i className="icofont-location-pin" />
													<span>New York AK United States</span>
												</li>
											</ul>
											<ul
												className="lab-ul event-count"
												data-date="July 05, 2021 21:14:01"
											>
												<li>
													<span className="days">34</span>
													<div className="count-text">Days</div>
												</li>
												<li>
													<span className="hours">09</span>
													<div className="count-text">Hours</div>
												</li>
												<li>
													<span className="minutes">32</span>
													<div className="count-text">Muni</div>
												</li>
												<li>
													<span className="seconds">32</span>
													<div className="count-text">Seco</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="event-bottom">
								<div className="row justify-content-center">
									<div className="col-lg-4 col-md-6 col-12">
										<div className="event-item lab-item">
											<div className="lab-inner">
												<div className="lab-thumb">
													<img
														src="/images/event/02.jpg"
														alt="event-image"
													/>
												</div>
												<div className="lab-content">
													<h5>
														<a href="#">
															If Islam Teaches Peace, Why Are there Radical
															Muslims?
														</a>
													</h5>
													<ul className="lab-ul event-date">
														<li>
															<i className="icofont-calendar" />
															<span>December 24,2021</span>
														</li>
														<li>
															<i className="icofont-location-pin" />
															<span>New York AK United States</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md col-12">
										<div className="event-item lab-item">
											<div className="lab-inner">
												<div className="lab-thumb">
													<img
														src="/images/event/03.jpg"
														alt="event-image"
													/>
												</div>
												<div className="lab-content">
													<h5>
														<a href="#">
															American Muslim: Choosing Remain Still This
															Ramadan
														</a>
													</h5>
													<ul className="lab-ul event-date">
														<li>
															<i className="icofont-calendar" />
															<span>December 24,2021</span>
														</li>
														<li>
															<i className="icofont-location-pin" />
															<span>New York AK United States</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 col-12">
										<div className="event-item lab-item">
											<div className="lab-inner">
												<div className="lab-thumb">
													<img
														src="/images/event/04.jpg"
														alt="event-image"
													/>
												</div>
												<div className="lab-content">
													<h5>
														<a href="#">
															How To Teach Kids Ramadan Isn’t About Food
														</a>
													</h5>
													<ul className="lab-ul event-date">
														<li>
															<i className="icofont-calendar" />
															<span>December 24,2021</span>
														</li>
														<li>
															<i className="icofont-location-pin" />
															<span>New York AK United States</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventSection;
