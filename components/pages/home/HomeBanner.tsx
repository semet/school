import Image from "next/image";
import React from "react";

const HomeBanner = () => {
	return (
		<section className="banner-section">
			<div className="container">
				<div className="row align-items-center flex-column-reverse flex-md-row">
					<div className="col-md-6">
						<div className="banner-item">
							<div className="banner-inner">
								<div className="banner-thumb">
									<Image
										src="/images/banner/01.png"
										alt="Banner-image"
										width={667}
										height={630}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="banner-item">
							<div className="banner-inner">
								<div className="banner-content align-middle">
									<h1>
										<span className="">
											And Allah Invites To <br className="d-none d-lg-block" />
											The{" "}
										</span>
										Home Of Peace
									</h1>
									<p>
										The most beloved actions to Allah are those performed
										consistently, even if they are few
									</p>
									<a href="#" className="lab-btn mt-3">
										Donate Now <i className="icofont-heart-alt" />
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

export default HomeBanner;
