import React, { Fragment, ReactElement } from "react";
import { StudentWithDetails } from "common";
import Image from "next/image";
import PageHeader from "../../components/partials/PageHeader";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
import MainLayout from "../../components/layouts/MainLayout";
import { prisma } from "../../prisma/db";

interface Props {
	student: StudentWithDetails;
}
const Student: NextPageWithLayout<Props> = ({ student }) => {
	return (
		<Fragment>
			<Head>
				<title>{student.name}</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="Profil Santri" />
			{/* content */}
			<div className="scholar-single-section padding-tb padding-b">
				<div className="container">
					<div className="section-wrapper bg-white pattern-3">
						<div className="section-inner">
							<div className="row justify-content-center">
								<div className="col-lg-6">
									<div className="scholar-left">
										<div className="scholar-single-item">
											<div className="scholar-single-thumb">
												<Image
													src="/images/team/team-single.jpg"
													alt="scholar"
													width={500}
													height={520}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="scholar-right">
										<div className="scholar-intro">
											<h5>{student.name}</h5>
											<span className="d-inline-block">{student.nisn}</span>
										</div>
										<div className="scholar-info">
											<div className="scholar-other-info">
												<ul className="lab-ul mt-4">
													<li>
														<span className="info-title">NIS </span>
														<span className="info-details">
															: {student.nis}
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Student.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Student;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const student = await prisma.student.findUnique({
		where: {
			id: params?.id as unknown as string,
		},
		include: {
			classRoom: {
				select: {
					name: true,
				},
			},
			year: {
				select: {
					name: true,
					startAt: true,
					endAt: true,
				},
			},
		},
	});

	return {
		props: {
			student: JSON.parse(JSON.stringify(student)),
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const students = await prisma.student.findMany({
		select: {
			id: true,
		},
	});
	const paths = students.map((student) => ({
		params: {
			id: student.id,
		},
	}));
	return {
		paths,
		fallback: false,
	};
};
