import { TeacherWithDetails } from "common";
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, ReactElement } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import PageHeader from "../../components/partials/PageHeader";
import { prisma } from "../../prisma/db";
import formatDate from "dateformat";

interface Props {
	teacher: TeacherWithDetails;
}

const Teacher: NextPageWithLayout<Props> = ({ teacher }) => {
	return (
		<Fragment>
			<Head>
				<title>{teacher.name}</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="Profil Guru" />
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
											<h5>{teacher.name}</h5>
											<span className="d-inline-block">
												({teacher.nip}) {teacher.lesson.name}
											</span>
										</div>
										<div className="scholar-info">
											<div className="scholar-other-info">
												<ul className="lab-ul mt-4">
													<li>
														<span className="info-title">NUPTK </span>
														<span className="info-details">
															: {teacher.nuptk}
														</span>
													</li>
													<li>
														<span className="info-title">Email </span>
														<span className="info-details">
															: {teacher.email}
														</span>
													</li>
													<li>
														<span className="info-title">Phone </span>
														<span className="info-details">
															: {teacher.phone}
														</span>
													</li>
													<li>
														<span className="info-title">
															Tanggal Lahir
														</span>
														<span className="info-details">
															: {formatDate(teacher.birthDate, "fullDate")}
														</span>
													</li>
													<li>
														<span className="info-title">Tempat Lahir</span>
														<span className="info-details">
															: {teacher.birthPlace}
														</span>
													</li>
													<li>
														<span className="info-title">Alamat </span>
														<span className="info-details">
															: {teacher.address}
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

Teacher.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Teacher;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const teacher = await prisma.teacher.findUnique({
		where: {
			id: params?.id as unknown as string,
		},
		include: {
			batch: {
				select: {
					name: true,
				},
			},
			department: {
				select: {
					name: true,
				},
			},
			lesson: {
				select: {
					name: true,
					code: true,
				},
			},
		},
	});

	return {
		props: {
			teacher: JSON.parse(JSON.stringify(teacher)),
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const teachers = await prisma.teacher.findMany({
		select: {
			id: true,
		},
	});
	const paths = teachers.map((teacher) => ({
		params: {
			id: teacher.id,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};
