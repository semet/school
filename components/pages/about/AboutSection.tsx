import Image from "next/image";
import React from "react";

const AboutSection = () => {
	return (
		<section className="about-section padding-tb shape-1">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-12">
						<div className="lab-item">
							<div className="lab-inner">
								<div className="lab-content">
									<div className="header-title text-start m-0">
										<h5>About Our History</h5>
										<h2 className="mb-0">
											Islamic Center For Muslims To Achieve Spiritual Goals
										</h2>
									</div>
									<h5 className="my-4">
										Our Promise To Uphold The Trust Placed.
									</h5>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Modi molestias culpa reprehenderit delectus, ullam harum,
										voluptatum numquam ati nesciunt odit quis corrupti magni
										quam consequatur sint ipsum tecto exercitationem, illo
										quisquam. Reprehenderit ut placeat cum adantium nam magnam
										blanditiis sequi modi! Nesciunt, repudiandae eos eniam quod
										maxime corrupti eligendi ea in animi.
									</p>
									<a href="#" className="lab-btn mt-4">
										Ask About Islam <i className="icofont-heart-alt" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="lab-item">
							<div className="lab-inner">
								<div className="lab-thumb">
									<div className="img-grp">
										<div className="about-circle-wrapper">
											<div className="about-circle-2" />
											<div className="about-circle" />
										</div>
										<div className="about-fg-img">
											<Image
												src="/images/about/02.png"
												alt="about-image"
												width={426}
												height={553}
											/>
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

export default AboutSection;
