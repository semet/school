import { StudentWithDetails } from "common";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

type Data = {
	students?: StudentWithDetails[];
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const { department, year } = req.query;
		const dep = await prisma.department.findUnique({
			where: {
				id: Number(department),
			},
			include: {
				batches: {
					include: {
						classRooms: {
							include: {
								students: {
									where: {
										yearId: Number(year),
										// isAlumni: true,
									},
								},
							},
						},
					},
				},
			},
		});
		const data = dep?.batches.flatMap((batch) =>
			batch.classRooms.flatMap((classRoom) => classRoom.students)
		);
		res.status(200).json({ students: data });
		res.end();
	} catch (err) {
		res.status(500).json({ error: "Unable to fetch students" });
		res.end();
	}
}
