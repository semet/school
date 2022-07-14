/* eslint-disable @next/next/no-img-element */
import { PostCommentWithDetails } from "common";
import React from "react";
import { useQuery } from "react-query";
import formatDate from "dateformat";
import { useListener } from "react-bus";

interface Props {
	postId: string;
	commentsCount?: number;
}

const PostComment: React.FC<Props> = ({ postId, commentsCount }) => {
	const {
		data: comments,
		refetch,
		isFetching,
		isLoading,
	} = useQuery<PostCommentWithDetails[]>(["postComment", postId], async () => {
		await new Promise((res) => setTimeout(res, 1000));
		const res = await fetch(`/api/post/comment?postId=${postId}`);
		const data = await res.json();
		return data.comments;
	});
	// update comment once new comment saved
	useListener("commentSaved", refetch);

	return (
		<div id="comments" className="comments bg-white">
			<h6 className="comment-title h7">{commentsCount} Comment</h6>
			<ul className="lab-ul comment-list">
				{comments !== undefined ? (
					comments.map((comment) => (
						<li className="comment" key={comment.id}>
							<div className="com-item">
								<div className="com-thumb">
									<img
										alt=""
										src="/images/team/05.jpg"
										srcSet="/images/team/05.jpg"
										className="avatar avatar-90 photo"
										height={90}
										width={90}
									/>
								</div>

								<div className="com-content">
									<div className="com-title">
										<div className="com-title-meta">
											<a href="#" rel="external nofollow" className="h7">
												{comment.user.name}
											</a>
											<span>
												{" "}
												{formatDate(comment.createdAt, "fullDate")}{" "}
											</span>
										</div>
									</div>
									<p
										style={{
											margin: 0,
											textAlign: "justify",
										}}
									>
										{comment.comment}
									</p>
								</div>
							</div>
						</li>
					))
				) : (
					<h6>No Comment</h6>
				)}
			</ul>
		</div>
	);
};

export default PostComment;
