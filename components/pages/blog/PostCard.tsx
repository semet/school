import { PostWithDetails } from "common";
import Image from "next/image";
import React from "react";
import formatDate from "dateformat";
import Link from "next/link";

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
					<Link href={`/blog/${post.slug}`}>
						<a>
							<h3>{post.title}</h3>
						</a>
					</Link>
					<ul className="lab-ul post-date">
						<li>
							<span>
								<i className="icofont-ui-calendar"></i>{" "}
								{formatDate(post.createdAt, "fullDate")}
							</span>
						</li>
						<li>
							<span>
								<i className="icofont-user"></i>
								<a href="#">Admin</a>
							</span>
						</li>
						<li>
							<span>
								<i className="icofont-speech-comments"></i>
								<a href="#">{post._count.comments} Komentar</a>
							</span>
						</li>
					</ul>
					<p
						style={{
							margin: 0,
							textAlign: "justify",
						}}
					>
						{post.body?.slice(0, 350)} &#8594;
					</p>
					<Link href={`/blog/${post.slug}`}>
						<a className="lab-btn mt-2">Read More</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
