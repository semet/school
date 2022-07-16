/* eslint-disable @next/next/no-img-element */
import { PostWithDetails } from "common";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import formatDate from "dateformat";

const WidgetRecentPosts = () => {
	const { data, isFetching, isLoading } = useQuery<PostWithDetails[]>(
		"recentPosts",
		async () => {
			// await new Promise((res) => setTimeout(res, 1000));
			const res = await fetch("/api/post/recent");
			const data = await res.json();

			return data.posts;
		}
	);

	useEffect(() => {
		console.log(data);
	}, [data]);
	return (
		<div className="widget widget-post">
			<div className="widget-header">
				<h5>Recent Post</h5>
			</div>
			<ul className="lab-ul widget-wrapper">
				{isFetching || isLoading ? (
					<p>Loading . . .</p>
				) : data !== undefined ? (
					data.map((post) => (
						<li className="d-flex flex-wrap justify-content-between" key={post.id}>
							<div className="post-thumb">
								<a href="blog-single.html">
									<img src="/images/product/01.jpg" alt="product" />
								</a>
							</div>
							<div className="post-content ps-4">
								<a href="blog-single.html">
									<h6>{post.title}</h6>
								</a>
								<p>{formatDate(post.createdAt, "fullDate")}</p>
							</div>
						</li>
					))
				) : null}
			</ul>
		</div>
	);
};

export default WidgetRecentPosts;
