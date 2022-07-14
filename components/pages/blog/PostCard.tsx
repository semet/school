import { PostWithDetails } from "common";
import Image from "next/image";
import React from "react";

interface Props {
	post: PostWithDetails;
}

const PostCard: React.FC<Props> = ({ post }) => {
	return (
		<div className="post-item-2">
			<div className="post-inner">
				<div className="post-thumb">
					<a href="blog-single.html">
						<Image src="/images/blog/01.jpg" alt="blog" width={770} height={370} />
					</a>
				</div>
				<div className="post-content">
					<a href="blog-single.html">
						<h3>Continually proactive services</h3>
					</a>
					<ul className="lab-ul post-date">
						<li>
							<span>
								<i className="icofont-ui-calendar"></i> October 9, 2019 10:59 am
							</span>
						</li>
						<li>
							<span>
								<i className="icofont-user"></i>
								<a href="#">Robot Smith</a>
							</span>
						</li>
						<li>
							<span>
								<i className="icofont-speech-comments"></i>
								<a href="#">09 Comments</a>
							</span>
						</li>
					</ul>
					<p>
						It’s no secret that the digital industry is booming. from exciting
						startups to global brands, to the new companies are reachin
						boomingesagencies, responding to the new psblites available. however,
						the industry is exciting fast becoming overcr.
					</p>
					<a href="#" className="lab-btn">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
