import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/db";

type Data = {
	message?: string;
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// const session = await getSession({ req });
	// if (session === null) {
	// 	res.status(401).json({
	// 		error: "You are not authorized to perform this action",
	// 	});
	// 	return;
	// }
	if (req.method === "POST") {
		try {
			const { comment, postId } = req.body;
			// const user = await prisma.user.findUnique({
			// 	where: {
			// 		email: session?.user?.email as string,
			// 	},
			// 	select: {
			// 		id: true,
			// 	},
			// });
			await prisma.postComment.create({
				data: {
					comment: comment,
					post: {
						connect: {
							id: postId,
						},
					},
					user: {
						connect: {
							id: "00853563-b10b-47f5-8770-0f9048d288e5",
						},
					},
				},
			});

			res.status(201).json({ message: "Comment saved successfully" });
			res.end();
		} catch (err) {
			res.status(500).json({ error: "Unable to save comment" });
			res.end();
		}
	} else {
		res.status(405).json({
			error: "Method not allowed",
		});
	}
}
