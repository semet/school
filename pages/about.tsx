import { GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import React, { Fragment, ReactElement } from "react";
import MainLayout from "../components/layouts/MainLayout";
import TeachersSection from "../components/pages/about/TeachersSection";
import VisionAndMission from "../components/pages/about/VisionAndMission";
import AboutSection from "../components/pages/home/AboutSection";
import PageHeader from "../components/partials/PageHeader";
import { prisma } from "../prisma/db";
import { About } from "@prisma/client";
import { HeadmasterWithDetails } from "common";

interface Props {
	about: About;
	headMasters: HeadmasterWithDetails[];
}

const AboutPage: NextPageWithLayout<Props> = ({ about, headMasters }) => {
	return (
		<Fragment>
			<Head>
				<title>About Abu Darda</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="About Abu Darda" />
			{/* About Section */}
			<AboutSection description={about.description} />
			{/* Vision and Mission */}
			<VisionAndMission vision={about.vision} mission={about.mission} />
			{/* Featured Teacher */}
			<TeachersSection teachers={headMasters} />
		</Fragment>
	);
};

AboutPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
	const about = await prisma.about.findFirst();
	const headMasters = await prisma.headmaster.findMany({
		include: {
			department: true,
		},
	});
	return {
		props: {
			about: JSON.parse(JSON.stringify(about)),
			headMasters: JSON.parse(JSON.stringify(headMasters)),
		},
	};
};
