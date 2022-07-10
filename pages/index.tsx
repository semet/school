import type { NextPageWithLayout } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment, ReactElement } from "react";
import MainLayout from "../components/layouts/MainLayout";

const Home: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Head>
				<title>Abudarda</title>
			</Head>
			<h1>Welcome</h1>
		</Fragment>
	);
};
Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Home;
