/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import React, { Fragment, ReactElement } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import UpcomingEvent from "../../components/pages/event/UpcomingEvent";
import PageHeader from "../../components/partials/PageHeader";
import { prisma } from "../../prisma/db";
import { Event } from "@prisma/client";
import formatDate from "dateformat";
import Image from "next/image";

interface Props {
	upcomingEvent: Event;
	events: Event[];
}
const EventPage: NextPageWithLayout<Props> = ({ events, upcomingEvent }) => {
	return (
		<Fragment>
			<Head>
				<title>Events</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="EVents " />
			{/* content */}
			<section className="event-section padding-tb padding-b shape-4">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="header-title">
								<h5>Upcoming Events</h5>
								<h2>
									Ethical And Moral Beliefs That Guides To The Straight Path!
								</h2>
							</div>
						</div>
						<div className="col-12">
							<div className="event-content">
								{/* Upcoming Event */}
								<UpcomingEvent event={upcomingEvent} />
								{/* All Events */}
								<div className="event-bottom">
									<div className="row justify-content-center">
										{events.map((event) => (
											<div className="col-lg-4 col-md-6 col-12" key={event.id}>
												<div className="event-item lab-item mb-4">
													<div className="lab-inner">
														<div className="lab-thumb">
															<img
																src="/images/event/02.jpg"
																alt="event-image"
															/>
														</div>
														<div className="lab-content">
															<h5>
																<a href="#">{event.name}</a>{" "}
															</h5>
															<ul className="lab-ul event-date">
																<li>
																	<i className="icofont-calendar" />{" "}
																	<span>
																		{formatDate(
																			event.startDate,
																			"fullDate"
																		)}
																	</span>
																</li>
																<li>
																	<i className="icofont-location-pin" />{" "}
																	<span>{event.location}</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

EventPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default EventPage;

export const getStaticProps: GetStaticProps = async () => {
	const upcomingEvent = await prisma.event.findMany({
		orderBy: {
			createdAt: "desc",
		},
		take: 1,
	});

	const allEvents = await prisma.event.findMany({
		orderBy: {
			createdAt: "desc",
		},
		skip: 1,
	});
	return {
		props: {
			upcomingEvent: JSON.parse(JSON.stringify(upcomingEvent[0])),
			events: JSON.parse(JSON.stringify(allEvents)),
		},
	};
};
