import { PostWithDetails } from "common";
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, ReactElement } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import BlogSidebar from "../../components/pages/blog/BlogSidebar";
import CommentForm from "../../components/pages/blog/CommentForm";
import PostComment from "../../components/pages/blog/PostComment";
import PageHeader from "../../components/partials/PageHeader";
import { prisma } from "../../prisma/db";
import formatDate from "dateformat";
import { useQuery } from "react-query";
import { useListener } from "react-bus";

interface Props {
	post: PostWithDetails;
}

const PostSingle: NextPageWithLayout<Props> = ({ post }) => {
	const {
		data: commentCount,
		refetch,
		isFetching,
		isLoading,
	} = useQuery<number>(["commentsCount", post.id], async () => {
		await new Promise((res) => setTimeout(res, 1000));
		const res = await fetch(`/api/post/comment-count?postId=${post.id}`);
		const data = await res.json();
		return data.count;
	});
	// update comment count once new comment saved
	useListener("commentSaved", refetch);

	return (
		<Fragment>
			<Head>
				<title>{post.title}</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="Post Detail" />
			{/* Content */}
			<div className="blog-section blog-page padding-tb aside-bg">
				<div className="container">
					<div className="section-wrapper">
						<div className="row justify-content-center pb-15">
							<div className="col-lg-8 col-12">
								<article>
									<div className="post-item-2">
										<div className="post-inner">
											<div className="post-thumb">
												<Image
													src="/images/blog/04.jpg"
													alt="blog"
													width={770}
													height={380}
												/>
											</div>
											<div className="post-content">
												<h3>{post.title}</h3>
												<ul className="lab-ul post-date">
													<li>
														<span>
															<i className="icofont-ui-calendar" />{" "}
															{formatDate(post.createdAt, "fullDate")}
														</span>
													</li>
													<li>
														<span>
															<i className="icofont-user" />
															<a href="#">Admin</a>
														</span>
													</li>
													<li>
														<span>
															<i className="icofont-speech-comments" />
															{isFetching ? (
																<div
																	className="spinner-border"
																	role="status"
																>
																	<span className="visually-hidden">
																		Loading...
																	</span>
																</div>
															) : (
																<a href="#">{commentCount} Comments</a>
															)}
														</span>
													</li>
												</ul>
												<p
													style={{
														margin: 0,
														textAlign: "justify",
													}}
												>
													{post.body}
												</p>

												<div className="tags-area">
													<ul className="share lab-ul justify-content-center">
														<li>
															<a href="#" className="facebook">
																<i className="fab fa-facebook-f" />
															</a>
														</li>
														<li>
															<a href="#" className="twitter">
																<i className="fab fa-twitter" />
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									{/* Comments */}
									<PostComment postId={post.id} commentsCount={commentCount} />
									{/* Comment Form */}
									<CommentForm postId={post.id} />
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

PostSingle.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default PostSingle;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await prisma.post.findUnique({
		where: {
			slug: params?.slug as unknown as string,
		},
		include: {
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
		},
	});

	return {
		props: {
			post: JSON.parse(JSON.stringify(post)),
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await prisma.post.findMany({
		select: {
			slug: true,
		},
	});

	const paths = posts.map((post) => ({
		params: {
			slug: post.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};
