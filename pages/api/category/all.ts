import { Category } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const categories = await prisma.category.findMany({
			select: {
				id: true,
				name: true,
				slug: true,
				_count: {
					select: {
						posts: true,
					},
				},
			},
		});

		res.status(200).json({
			categories: categories,
		});
	} catch (err) {
		res.status(500).json({ message: "Unable to fetch categories" });
	}
}
