/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const DailyHadits = () => {
	return (
		<div className="qoute-section padding-tb">
			<div className="qoute-section-wrapper">
				<div className="qoute-overlay" />
				<div className="container">
					<Swiper
						className="qoute-container"
						slidesPerView={1}
						spaceBetween={20}
						autoplay={{ delay: 10000, disableOnInteraction: false }}
						loop={true}
					>
						<div className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="lab-item qoute-item">
									<div className="lab-inner d-flex align-items-center">
										<div className="lab-thumb">
											<span>Quote From Prophat</span>
											<i className="icofont-quote-left" />
										</div>
										<div className="lab-content">
											<blockquote className="blockquote">
												<p>
													Hazrat Mohammod (s) Said
													<span>
														"It is Better For Any Of You To Carry A Load Of
														Firewood On His Own Back Than To Beg From
														Someone Else"
													</span>
												</p>
												<footer className="blockquote-footer bg-transparent">
													Riyadh-Us-Saleheen, Chapter 59, hadith 540
												</footer>
											</blockquote>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</div>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default DailyHadits;
