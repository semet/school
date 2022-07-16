import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const posts = await prisma.post.findMany({
			take: 4,
			orderBy: {
				createdAt: "desc",
			},
		});
		res.status(200).json({
			posts,
		});
	} catch (err) {
		res.status(500).json({
			error: "Unable to fetch recent posts",
		});
	}
}
