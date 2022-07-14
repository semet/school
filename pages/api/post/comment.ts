import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const comments = await prisma.postComment.findMany({
			where: {
				postId: req.query.postId as unknown as string,
			},
			select: {
				id: true,
				comment: true,
				createdAt: true,
				user: {
					select: {
						name: true,
						email: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		res.status(200).json({
			comments: comments,
		});
		res.end();
	} catch (err) {
		res.status(500).json({
			message: "Unable to load post comment",
		});
	}
}
