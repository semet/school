import React, { Fragment } from "react";
import UpcomingProgram from "./UpcomingProgram";

const ProgramSection = () => {
	return (
		<Fragment>
			<section
				className="program-section padding-tb bg-img"
				style={{
					background: "url(/images/program/bg.jpg) rgba(5, 21, 57, 0.7)",
					backgroundBlendMode: "overlay",
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="header-title">
								<h5>Urgent Campaign</h5>
								<h2 className="mb-4">Free And Complete Guide To All Muslims</h2>
							</div>
						</div>
						<div className="col-12">
							<div className="progress-item-wrapper text-center">
								<div className="progress-item mb-4">
									<div
										className="progress-bar-wrapper progress"
										data-percent="50%"
									>
										<div className="progress-bar progress-bar-striped progress-bar-animated" />
									</div>
									<div className="progress-bar-percent d-flex align-items-center justify-content-center">
										50 <sup>%</sup>
									</div>
									<ul className="progress-item-status lab-ul d-flex justify-content-between">
										<li>
											Raised<span> $24,000</span>
										</li>
										<li>
											Gold<span> $34,900</span>
										</li>
									</ul>
								</div>
								<a href="#" className="lab-btn">
									Donate Now <i className="icofont-heart-alt" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<UpcomingProgram />
		</Fragment>
	);
};

export default ProgramSection;
