import Image from "next/image";
import React from "react";
import { HeadmasterWithDetails } from "common";

interface Props {
	teachers: HeadmasterWithDetails[];
}

const TeachersSection: React.FC<Props> = ({ teachers }) => {
	return (
		<section className="team-section padding-tb">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="header-title">
							<h5>Kepala Sekolah Dari Semua Departemen</h5>
							<h2>Our Scholar Whose Knowledge Is Useful For Others</h2>
						</div>
					</div>
					<div className="col-12">
						<div className="row justify-content-center pb-10">
							{teachers.map((teacher) => (
								<div
									className="col-xl-3 col-lg-4 col-sm-6 col-12"
									key={teacher.id}
								>
									<div className="card text-center border-none team-item-1">
										<div className="lab-inner">
											<div className="lab-thumb">
												<Image
													src={teacher.photo!}
													className="card-img-top"
													alt="product"
													width={200}
													height={200}
												/>
											</div>
											<div className="lab-content">
												<a href="#">
													<h6 className="card-title mb-0">{teacher.name}</h6>
												</a>
												<p className="card-text mb-3">
													{teacher.department.name}
												</p>
												<div className="social-share">
													<a href="#" className="m-1 twitter">
														<i className="icofont-twitter" />
													</a>
													<a href="#" className="m-1 behance">
														<i className="icofont-facebook" />
													</a>
													<a href="#" className="m-1 instagram">
														<i className="icofont-instagram" />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeachersSection;
