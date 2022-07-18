import Image from "next/image";
import React from "react";

interface Props {
	description: string;
}

const AboutSection: React.FC<Props> = ({ description }) => {
	return (
		<section className="about-section padding-tb shape-1">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-12">
						<div className="lab-item">
							<div className="lab-inner">
								<div className="lab-content">
									<div className="header-title text-start m-0">
										<h5>Sejarah singkat Abu Darda</h5>
										<h2 className="mb-0">Pondok Pesantren Abu Darda</h2>
									</div>
									<h5 className="my-4">
										Our Promise To Uphold The Trust Placed.
									</h5>
									<p style={{ textAlign: "justify" }}>{description}</p>
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
												src="/images/banner/baok.jpg"
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
