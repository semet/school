// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Batch, ClassRoom } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/db";

type Data = {
	classRooms: ClassRoom[];
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const classRooms = await prisma.classRoom.findMany({
			where: {
				batchId: Number(req.query.batch),
			},
		});

		res.status(200).json({ classRooms: classRooms });
		res.end();
	} catch (err) {
		res.status(500).json({ error: "Unable to fetch batches", classRooms: [] });
		res.end();
	}
}
