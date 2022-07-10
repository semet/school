/* eslint-disable @next/next/no-img-element */
import React from "react";

const FeatureSection = () => {
	return (
		<section className="feature-section bg-ash padding-tb">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-sm-6 col-12">
						<div className="lab-item feature-item text-xs-center">
							<div className="lab-inner">
								<div className="lab-thumb">
									<img src="/images/feature/01.png" alt="feature-image" />
								</div>
								<div className="lab-content">
									<h5>Quran Studies</h5>
									<p>
										Lorem ipsum dolor sit, amet is consectetur adipisicing
										elit.Its expedita porro natus
									</p>
									<a href="#" className="text-btn">
										Sponsor Now!
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 col-12">
						<div className="lab-item feature-item">
							<div className="lab-inner">
								<div className="lab-thumb">
									<img src="/images/feature/02.png" alt="feature-image" />
								</div>
								<div className="lab-content">
									<h5>Islamic Classes</h5>
									<p>
										Lorem ipsum dolor sit, amet is consectetur adipisicing
										elit.Its expedita porro natus
									</p>
									<a href="#" className="text-btn">
										Donate Now!
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 col-12">
						<div className="lab-item feature-item">
							<div className="lab-inner">
								<div className="lab-thumb">
									<img src="/images/feature/03.png" alt="feature-image" />
								</div>
								<div className="lab-content">
									<h5>Islamic Awareness</h5>
									<p>
										Lorem ipsum dolor sit, amet is consectetur adipisicing
										elit.Its expedita porro natus
									</p>
									<a href="#" className="text-btn">
										Join Us!
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 col-12">
						<div className="lab-item feature-item">
							<div className="lab-inner">
								<div className="lab-thumb">
									<img src="/images/feature/04.png" alt="feature-image" />
								</div>
								<div className="lab-content">
									<h5>Islamic Services</h5>
									<p>
										Lorem ipsum dolor sit, amet is consectetur adipisicing
										elit.Its expedita porro natus
									</p>
									<a href="#" className="text-btn">
										Get Involved!
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;
