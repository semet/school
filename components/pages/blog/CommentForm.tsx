import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useBus } from "react-bus";

interface Props {
	postId: string;
}

const CommentForm: React.FC<Props> = ({ postId }) => {
	const bus = useBus();

	const formik = useFormik({
		initialValues: {
			comment: "",
		},
		validationSchema: Yup.object({
			comment: Yup.string()
				.required("Please type your comment")
				.min(10, "Comment must be at least 5 characters"),
		}),
		onSubmit: async (values) => {
			const res = await fetch("/api/post/comment-post", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...values, postId }),
			});

			if (res.status === 201) {
				bus.emit("commentSaved");
				formik.resetForm();
			}
		},
	});
	return (
		<div id="respond" className="comment-respond bg-white">
			<h6 className="h7">Leave a Comment</h6>
			<div className="add-comment">
				<form
					onSubmit={formik.handleSubmit}
					id="commentform"
					className="comment-form"
				>
					<textarea
						id="comment"
						name="comment"
						rows={7}
						placeholder="Type Here Your Comment*"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.comment}
						className={`form-control ${
							formik.touched.comment && formik.errors.comment ? "is-invalid" : ""
						}`}
					/>
					{formik.touched.comment && formik.errors.comment ? (
						<div className="invalid-feedback">{formik.errors.comment}</div>
					) : null}
					<button type="submit" className="lab-btn">
						<span>Send Comment</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default CommentForm;
