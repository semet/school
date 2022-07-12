/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Event } from "@prisma/client";
import formatDate from "dateformat";

interface Props {
	event: Event;
}

const UpcomingEvent: React.FC<Props> = ({ event }) => {
	return (
		<div className="event-top tri-shape-2 pattern-2">
			<div className="event-top-thumb">
				<img src="/images/event/01.jpg" alt="Upcoming-event" />
			</div>
			<div className="event-top-content">
				<div className="event-top-content-wrapper">
					<h3>
						<a href="#">{event.name}</a>{" "}
					</h3>
					<div className="date-count-wrapper">
						<ul className="lab-ul event-date">
							<li>
								<i className="icofont-calendar" />{" "}
								<span>{formatDate(event.startDate, "fullDate")}</span>
							</li>
							<li>
								<i className="icofont-location-pin" />{" "}
								<span>{event.location}</span>
							</li>
						</ul>
						<ul className="lab-ul event-count" data-date="July 05, 2021 21:14:01">
							<li>
								<span className="days">34</span>
								<div className="count-text">Days</div>
							</li>
							<li>
								<span className="hours">09</span>
								<div className="count-text">Hours</div>
							</li>
							<li>
								<span className="minutes">32</span>
								<div className="count-text">Muni</div>
							</li>
							<li>
								<span className="seconds">32</span>
								<div className="count-text">Seco</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpcomingEvent;
