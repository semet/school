// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Batch } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/db";

type Data = {
	batches: Batch[];
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const batches = await prisma.batch.findMany({
			where: {
				departmentId: Number(req.query.department),
			},
		});

		res.status(200).json({ batches: batches });
		res.end();
	} catch (err) {
		res.status(500).json({ error: "Unable to fetch batches", batches: [] });
		res.end();
	}
}
