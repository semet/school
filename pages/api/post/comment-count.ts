import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const post = await prisma.post.findUnique({
			where: {
				id: req.query.postId as unknown as string,
			},
			select: {
				_count: {
					select: {
						comments: true,
					},
				},
			},
		});

		res.status(200).json({
			count: post?._count.comments,
		});
		res.end();
	} catch (err) {
		res.status(500).json({
			message: "Unable to load post comment",
		});
	}
}
