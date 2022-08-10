import type { GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment, ReactElement } from "react";
import MainLayout from "../components/layouts/MainLayout";
import AboutSection from "../components/pages/home/AboutSection";
import DailyHadits from "../components/pages/home/DailyHadits";
import EventSection from "../components/pages/home/EventSection";
import FaithSection from "../components/pages/home/FaithSection";
import FeatureSection from "../components/pages/home/FeatureSection";
import HomeBanner from "../components/pages/home/HomeBanner";
import ProgramSection from "../components/pages/home/ProgramSection";
import ServiceSection from "../components/pages/home/ServiceSection";
import { prisma } from "../prisma/db";

interface Props {
	description: string;
}

const Home: NextPageWithLayout<Props> = ({ description }) => {
	return (
		<Fragment>
			<Head>
				<title>Abudarda</title>
			</Head>
			{/* Home Banner */}
			<HomeBanner />
			{/* About */}
			<AboutSection description={description} />
			{/* Feature */}
			<FeatureSection />
			{/* Service */}
			<ServiceSection />
			{/* Program */}
			<ProgramSection />
			{/* Faith Section */}
			<FaithSection />
			{/* Daily Hadits */}
			<DailyHadits />
			{/* Events */}
			<EventSection />
		</Fragment>
	);
};
Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const about = await prisma.about.findFirst();
	return {
		props: {
			description: JSON.parse(JSON.stringify(about?.description)),
		},
	};
};
