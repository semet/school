import { TeacherWithDetails } from "common";
import { GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import React, { Fragment, ReactElement, useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import TeacherCard from "../../components/pages/teacher/TeacherCard";
import PageHeader from "../../components/partials/PageHeader";
import { prisma } from "../../prisma/db";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
	teachers: TeacherWithDetails[];
}

const TeacherPage: NextPageWithLayout<Props> = ({ teachers }) => {
	const [data, setData] = useState<TeacherWithDetails[]>(teachers.slice(0, 12));
	const [sliceAmount, setSliceAmount] = useState(12);
	// get all the teacher and limit by 10 and return the data
	const loadMore = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		teachers
			.slice(sliceAmount, 12 + data.length)
			.map((teacher) => setData((data) => [...data, teacher]));

		setSliceAmount(sliceAmount + 12);
	};

	useEffect(() => {
		console.log(data);
		console.log(teachers.length - data.length > 0);
	});

	return (
		<Fragment>
			<Head>
				<title>Guru</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="Guru dan Tenaga Pengajar" />
			{/* content */}
			<div className="team-section padding-tb">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="row justify-content-center">
								{/* Teacher Card */}
								{data.map((teacher) => (
									<TeacherCard teacher={teacher} key={teacher.id} />
								))}
							</div>
							<div className="d-flex justify-content-center">
								<a href="#" className="lab-btn" onClick={(e) => loadMore(e)}>
									load more ...
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

TeacherPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default TeacherPage;

export const getStaticProps: GetStaticProps = async () => {
	const teachers = await prisma.teacher.findMany({
		include: {
			batch: true,
			lesson: {
				select: {
					code: true,
					name: true,
				},
			},
		},
	});
	return {
		props: {
			teachers: JSON.parse(JSON.stringify(teachers)),
		},
	};
};
