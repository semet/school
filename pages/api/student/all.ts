import { StudentWithDetails } from "common";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

type Data = {
	students?: StudentWithDetails[];
	error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const { year, classRoom } = req.query;
		const students = await prisma.student.findMany({
			where: {
				yearId: Number(year),
				classRoomId: Number(classRoom),
			},
			select: {
				id: true,
				name: true,
				nisn: true,
			},
		});
		res.status(200).json({ students: students as StudentWithDetails[] });
		res.end();
	} catch (err) {
		res.status(500).json({ error: "Unable to fetch students" });
		res.end();
	}
}
