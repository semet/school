import { TeacherWithDetails } from "common";
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import React, { Fragment, ReactElement } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { prisma } from "../../prisma/db";

interface Props {
	teacher: TeacherWithDetails;
}

const Teacher: NextPageWithLayout<Props> = ({ teacher }) => {
	return (
		<Fragment>
			<Head>
				<title>{teacher.name}</title>
			</Head>
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
