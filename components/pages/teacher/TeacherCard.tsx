/* eslint-disable @next/next/no-img-element */
import { TeacherWithDetails } from "common";
import Link from "next/link";
import React from "react";

interface Props {
	teacher: TeacherWithDetails;
}

const TeacherCard: React.FC<Props> = ({ teacher }) => {
	return (
		<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
			<div className="card mb-4 text-center border-none team-item-1 pattern-2">
				<div className="lab-inner">
					<div className="lab-thumb">
						<img src="/images/team/01.jpg" className="card-img-top" alt="product" />
					</div>
					<div className="lab-content">
						<Link href={`/teacher/${teacher.id}`}>
							<a>
								<h6 className="card-title mb-0">{teacher.name}</h6>
							</a>
						</Link>
						<p className="card-text mb-3">{teacher.lesson.name}</p>
						<div className="social-share">
							<a href="#" className="m-1 twitter">
								<i className="icofont-twitter" />
							</a>
							<a href="#" className="m-1 behance">
								<i className="icofont-behance" />
							</a>
							<a href="#" className="m-1 instagram">
								<i className="icofont-instagram" />
							</a>
							<a href="#" className="m-1 vimeo">
								<i className="icofont-vimeo" />
							</a>
							<a href="#" className="m-1 linkedin">
								<i className="icofont-linkedin" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherCard;
