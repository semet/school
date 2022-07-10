/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const FaithSection = () => {
	return (
		<section className="faith-section padding-tb shape-3">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="header-title">
							<h5>The Pillars of Islam</h5>
							<h2>Ethical And Moral Beliefs That Guides To The Straight Path!</h2>
						</div>
					</div>
					<div className="col-12">
						<div className="faith-content">
							<div className="tab-content" id="pills-tabContent">
								<div
									className="tab-pane fade show active"
									id="shahadah"
									role="tabpanel"
									aria-labelledby="sahadah-tab"
								>
									<div className="lab-item faith-item tri-shape-1 pattern-2">
										<div className="lab-inner d-flex align-items-center">
											<div className="lab-thumb">
												<img src="/images/faith/01.png" alt="faith-image" />
											</div>
											<div className="lab-content">
												<h4>
													Shahadah <span>(Faith)</span>
												</h4>
												<p>
													The Shahadah, is an Islamic creed, one of the Five
													Pillars of Islam and part of the Adhan. It reads:
													"I bear witness that there is no deity but God, and
													I bear witness that Muhammad is the messenger of
													God."
												</p>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="prayer"
									role="tabpanel"
									aria-labelledby="salah-tab"
								>
									<div className="lab-item faith-item tri-shape-1 pattern-2">
										<div className="lab-inner d-flex align-items-center">
											<div className="lab-thumb">
												<img src="/images/faith/02.png" alt="faith-image" />
											</div>
											<div className="lab-content">
												<h4>
													Salaah <span>(Prayer)</span>
												</h4>
												<p>
													Each Muslim should pray five times a day: in the
													morning, at noon, in the afternoon, after sunset,
													and early at night. These prayers can be said
													anywhere, prayers that are said in company of
													others are better than those said alone.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="ramadan"
									role="tabpanel"
									aria-labelledby="sawm-tab"
								>
									<div className="lab-item faith-item tri-shape-1 pattern-2">
										<div className="lab-inner d-flex align-items-center">
											<div className="lab-thumb">
												<img src="/images/faith/03.png" alt="faith-image" />
											</div>
											<div className="lab-content">
												<h4>
													Sawm <span>(Fasting)</span>
												</h4>
												<p>
													Each Muslim should pray five times a day: in the
													morning, at noon, in the afternoon, after sunset,
													and early at night. These prayers can be said
													anywhere, prayers that are said in company of
													others are better than those said alone.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="jakat"
									role="tabpanel"
									aria-labelledby="zakat-tab"
								>
									<div className="lab-item faith-item tri-shape-1 pattern-2">
										<div className="lab-inner d-flex align-items-center">
											<div className="lab-thumb">
												<img src="/images/faith/04.png" alt="faith-image" />
											</div>
											<div className="lab-content">
												<h4>
													Zakat <span>(Almsgiving)</span>
												</h4>
												<p>
													Each Muslim should pray five times a day: in the
													morning, at noon, in the afternoon, after sunset,
													and early at night. These prayers can be said
													anywhere, prayers that are said in company of
													others are better than those said alone.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="hajj"
									role="tabpanel"
									aria-labelledby="hajj-tab"
								>
									<div className="lab-item faith-item tri-shape-1 pattern-2">
										<div className="lab-inner d-flex align-items-center">
											<div className="lab-thumb">
												<img src="/images/faith/05.png" alt="faith-image" />
											</div>
											<div className="lab-content">
												<h4>
													Hajj <span>(Pilgrimage)</span>
												</h4>
												<p>
													Each Muslim should pray five times a day: in the
													morning, at noon, in the afternoon, after sunset,
													and early at night. These prayers can be said
													anywhere, prayers that are said in company of
													others are better than those said alone.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<ul
								className="nav nav-pills mb-3 align-items-center justify-content-center"
								id="pills-tab"
								role="tablist"
							>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link active"
										id="sahadah-tab"
										data-bs-toggle="pill"
										href="#shahadah"
										role="tab"
										aria-controls="sahadah-tab"
										aria-selected="true"
									>
										<img
											src="/images/faith/faith-icons/01.png"
											alt="faith-icon"
										/>
									</a>
								</li>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link"
										id="salah-tab"
										data-bs-toggle="pill"
										href="#prayer"
										role="tab"
										aria-controls="salah-tab"
										aria-selected="false"
									>
										<img
											src="/images/faith/faith-icons/02.png"
											alt="faith-icon"
										/>
									</a>
								</li>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link"
										id="sawm-tab"
										data-bs-toggle="pill"
										href="#ramadan"
										role="tab"
										aria-controls="sawm-tab"
										aria-selected="false"
									>
										<img
											src="/images/faith/faith-icons/03.png"
											alt="faith-icon"
										/>
									</a>
								</li>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link"
										id="zakat-tab"
										data-bs-toggle="pill"
										href="#jakat"
										role="tab"
										aria-controls="zakat-tab"
										aria-selected="false"
									>
										<img
											src="/images/faith/faith-icons/04.png"
											alt="faith-icon"
										/>
									</a>
								</li>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link"
										id="hajj-tab"
										data-bs-toggle="pill"
										href="#hajj"
										role="tab"
										aria-controls="hajj-tab"
										aria-selected="false"
									>
										<img
											src="/images/faith/faith-icons/05.png"
											alt="faith-icon"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FaithSection;
