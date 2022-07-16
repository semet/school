import { Category } from "@prisma/client";
import { PostWithDetails } from "common";
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import React, { Fragment, ReactElement, useMemo, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import BlogSidebar from "../../components/pages/blog/BlogSidebar";
import PostCard from "../../components/pages/blog/PostCard";
import PageHeader from "../../components/partials/PageHeader";
import Pagination from "../../components/partials/Pagination";
import { prisma } from "../../prisma/db";

interface Props {
	category: Category;
	posts: PostWithDetails[];
}

let PageSize = 5;

const PostByCategory: NextPageWithLayout<Props> = ({ posts, category }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const currentData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return posts.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, posts]);

	return (
		<Fragment>
			<Head>
				<title>Posts</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="Blog Post" />
			{/* Content */}
			<div className="blog-section blog-page padding-tb aside-bg">
				<div className="container">
					<div className="section-wrapper">
						<div className="row justify-content-center">
							<div className="col-lg-8 col-12">
								<article>
									{/*Post Card  */}
									{currentData.map((post) => (
										<PostCard post={post} key={post.id} />
									))}
									<Pagination
										className="pagination-bar"
										currentPage={currentPage}
										totalCount={posts.length}
										pageSize={PageSize}
										onPageChange={(page) => setCurrentPage(page)}
									/>
								</article>
							</div>
							{/* Sidebar */}
							<div className="col-lg-4 col-md-7 col-12">
								<BlogSidebar />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

PostByCategory.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default PostByCategory;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const category = await prisma.category.findUnique({
		where: {
			slug: params?.slug as unknown as string,
		},
	});

	const posts = await prisma.post.findMany({
		where: {
			categoryId: category?.id,
		},
		select: {
			body: true,
			createdAt: true,
			id: true,
			slug: true,
			title: true,
			category: {
				select: {
					name: true,
					slug: true,
				},
			},
			comments: {
				select: {
					id: true,
					user: {
						select: {
							name: true,
							email: true,
						},
					},
				},
			},
			images: {
				select: {
					title: true,
				},
			},
			_count: {
				select: {
					comments: true,
				},
			},
		},
	});

	return {
		props: {
			category: JSON.parse(JSON.stringify(category)),
			posts: JSON.parse(JSON.stringify(posts)),
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = await prisma.category.findMany({
		select: {
			slug: true,
		},
	});
	const paths = categories.map((category) => ({
		params: {
			slug: category.slug,
		},
	}));
	return {
		paths,
		fallback: false,
	};
};
