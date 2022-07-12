/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

interface Props {
	vision: string;
	mission: string;
}

const VisionAndMission: React.FC<Props> = ({ vision, mission }) => {
	return (
		<section className="faith-section padding-tb shape-3">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="header-title">
							<h5>Visi dan Misi</h5>
							<h2>Visi dan Misi Abu Darda</h2>
						</div>
					</div>
					<div className="col-12">
						<div className="faith-content">
							<ul
								className="nav nav-pills mb-3 align-items-center justify-content-center"
								id="pills-tab"
								role="tablist"
							>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link active"
										id="vision-tab"
										data-bs-toggle="pill"
										href="#vision"
										role="tab"
										aria-controls="vision-tab"
										aria-selected="true"
									>
										Visi
									</a>
								</li>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link"
										id="mission-tab"
										data-bs-toggle="pill"
										href="#mission"
										role="tab"
										aria-controls="mission-tab"
										aria-selected="false"
									>
										Missi
									</a>
								</li>
							</ul>
							<div className="tab-content" id="pills-tabContent">
								<div
									className="tab-pane fade show active"
									id="vision"
									role="tabpanel"
									aria-labelledby="sahadah-tab"
								>
									<div className="lab-item faith-item tri-shape-1 pattern-2">
										<div className="lab-inner d-flex align-items-center">
											<div className="lab-thumb">
												<img src="/images/faith/01.png" alt="faith-image" />
											</div>
											<div className="lab-content">
												<h4>Visi Abu Darda </h4>
												<p style={{ textAlign: "justify" }}>{vision}</p>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="mission"
									role="tabpanel"
									aria-labelledby="salah-tab"
								>
									<div className="lab-item faith-item tri-shape-1 pattern-2">
										<div className="lab-inner d-flex align-items-center">
											<div className="lab-thumb">
												<img src="/images/faith/02.png" alt="faith-image" />
											</div>
											<div className="lab-content">
												<h4>Missi Abu Darda </h4>
												<p style={{ textAlign: "justify" }}>{mission}</p>
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

export default VisionAndMission;
