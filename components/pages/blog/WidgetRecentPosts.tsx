/* eslint-disable @next/next/no-img-element */
import React from "react";

const WidgetRecentPosts = () => {
	return (
		<div className="widget widget-post">
			<div className="widget-header">
				<h5>Recent Post</h5>
			</div>
			<ul className="lab-ul widget-wrapper">
				<li className="d-flex flex-wrap justify-content-between">
					<div className="post-thumb">
						<a href="blog-single.html">
							<img src="/images/product/01.jpg" alt="product" />
						</a>
					</div>
					<div className="post-content ps-4">
						<a href="blog-single.html">
							<h6>Poor People’s Campaign Our Resources</h6>
						</a>
						<p>04 February 2019</p>
					</div>
				</li>
				<li className="d-flex flex-wrap justify-content-between">
					<div className="post-thumb">
						<a href="blog-single.html">
							<img src="/images/product/02.jpg" alt="product" />
						</a>
					</div>
					<div className="post-content ps-4">
						<a href="blog-single.html">
							<h6>Boosting Social For NGO And Charities </h6>
						</a>
						<p>04 February 2019</p>
					</div>
				</li>
				<li className="d-flex flex-wrap justify-content-between">
					<div className="post-thumb">
						<a href="blog-single.html">
							<img src="/images/product/03.jpg" alt="product" />
						</a>
					</div>
					<div className="post-content ps-4">
						<a href="blog-single.html">
							<h6>Poor People’s Campaign Our Resources</h6>
						</a>
						<p>04 February 2019</p>
					</div>
				</li>
				<li className="d-flex flex-wrap justify-content-between">
					<div className="post-thumb">
						<a href="blog-single.html">
							<img src="/images/product/04.jpg" alt="product" />
						</a>
					</div>
					<div className="post-content ps-4">
						<a href="blog-single.html">
							<h6>Boosting Social For NGO And Charities </h6>
						</a>
						<p>04 February 2019</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default WidgetRecentPosts;
