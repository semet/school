/* eslint-disable @next/next/no-img-element */
import { StudentWithDetails } from "common";
import Link from "next/link";
import React from "react";

interface Props {
	student: StudentWithDetails;
}

const StudentCard: React.FC<Props> = ({ student }) => {
	return (
		<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
			<div className="card mb-4 text-center border-none team-item-1 pattern-2">
				<div className="lab-inner">
					<div className="lab-thumb">
						<img src="/images/team/02.jpg" className="card-img-top" alt="product" />
					</div>
					<div className="lab-content">
						<Link href={`/alumni/${student.id}`}>
							<a>
								<h6 className="card-title mb-0">{student.name}</h6>
							</a>
						</Link>
						<p className="card-text mb-3">{student.nisn}</p>
					</div>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default StudentCard;
