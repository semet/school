import { prisma } from "./db";
import { Gender, Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { faker } from "@faker-js/faker";

const aboutSeed = async () => {
	await prisma.about.create({
		data: {
			builtDate: faker.date.recent(),
			vision: faker.lorem.sentence(50),
			mission: faker.lorem.sentence(50),
			description: faker.lorem.sentence(200),
			logo: faker.image.imageUrl(),
		},
	});
};
//Year and Semester
const yearSeed = async () => {
	await prisma.year.create({
		data: {
			name: "2017/2018",
			startAt: new Date("2017-01-01"),
			endAt: new Date("2017-12-31"),
			semesters: {
				createMany: {
					data: [
						{
							name: "Ganjil",
							startAt: new Date("2017-01-01"),
							endAt: new Date("2017-06-01"),
						},
						{
							name: "Genap",
							startAt: new Date("2017-06-01"),
							endAt: new Date("2017-12-31"),
						},
					],
				},
			},
		},
	});

	await prisma.year.create({
		data: {
			name: "2018/2019",
			startAt: new Date("2018-01-01"),
			endAt: new Date("2018-12-31"),
			semesters: {
				createMany: {
					data: [
						{
							name: "Ganjil",
							startAt: new Date("2018-01-01"),
							endAt: new Date("2018-06-01"),
						},
						{
							name: "Genap",
							startAt: new Date("2018-06-01"),
							endAt: new Date("2018-12-31"),
						},
					],
				},
			},
		},
	});

	await prisma.year.create({
		data: {
			name: "2019/2020",
			startAt: new Date("2019-01-01"),
			endAt: new Date("2019-12-31"),
			semesters: {
				createMany: {
					data: [
						{
							name: "Ganjil",
							startAt: new Date("2019-01-01"),
							endAt: new Date("2019-06-01"),
						},
						{
							name: "Genap",
							startAt: new Date("2019-06-01"),
							endAt: new Date("2019-12-31"),
						},
					],
				},
			},
		},
	});

	await prisma.year.create({
		data: {
			name: "2020/2021",
			startAt: new Date("2020-01-01"),
			endAt: new Date("2020-12-31"),
			semesters: {
				createMany: {
					data: [
						{
							name: "Ganjil",
							startAt: new Date("2020-01-01"),
							endAt: new Date("2020-06-01"),
						},
						{
							name: "Genap",
							startAt: new Date("2020-06-01"),
							endAt: new Date("2020-12-31"),
						},
					],
				},
			},
		},
	});
	await prisma.year.create({
		data: {
			name: "2022/2023",
			startAt: new Date("2022-01-01"),
			endAt: new Date("2022-12-31"),
			semesters: {
				createMany: {
					data: [
						{
							name: "Ganjil",
							startAt: new Date("2022-01-01"),
							endAt: new Date("2022-06-01"),
						},
						{
							name: "Genap",
							startAt: new Date("2022-06-01"),
							endAt: new Date("2022-12-31"),
						},
					],
				},
			},
		},
	});
	await prisma.year.create({
		data: {
			name: "2021/2022",
			startAt: new Date("2021-01-01"),
			endAt: new Date("2021-12-31"),
			semesters: {
				createMany: {
					data: [
						{
							name: "Ganjil",
							startAt: new Date("2021-01-01"),
							endAt: new Date("2021-06-01"),
						},
						{
							name: "Genap",
							startAt: new Date("2021-06-01"),
							endAt: new Date("2021-12-31"),
						},
					],
				},
			},
		},
	});
};
//department seed
const departmentSeed = async () => {
	//MI
	const mi = await prisma.department
		.create({
			data: {
				name: "MI (Madrasah Ibtidaiyah)",
				description: faker.lorem.paragraph(),
				headmaster: {
					create: {
						nip: new Date().getTime().toString(),
						nuptk: new Date().getTime().toString(),
						name: faker.name.findName(),
						address: faker.address.streetAddress(),
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						email: faker.internet.email(),
						password: hashSync("123456", 10),
						phone: faker.phone.number(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
						role: "HEADMASTER",
						emailVerified: true,
					},
				},
			},
		})
		.then(async (department) => {
			//kelas I
			await prisma.batch
				.create({
					data: {
						name: "I",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas I A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "I A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 6,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas I B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "I B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 6,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			// kelas II
			await prisma.batch
				.create({
					data: {
						name: "II",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas I A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "II A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 5,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas I B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "II B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 5,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			//kelas III
			await prisma.batch
				.create({
					data: {
						name: "III",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas III A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "III A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 4,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas III B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "III B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 4,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			//kelas IV
			await prisma.batch
				.create({
					data: {
						name: "IV",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas IV A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "IV A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 3,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas IV B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "IV B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 3,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			//kelas V
			await prisma.batch
				.create({
					data: {
						name: "V",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas V A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "V A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 2,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas V B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "V B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 2,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			//kelas VI
			await prisma.batch
				.create({
					data: {
						name: "VI",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas VI A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "VI A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 1,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas VI B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "VI B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 1,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
		});
	// MTs
	const mts = await prisma.department
		.create({
			data: {
				name: "MTs (Madrasah Tsanawiyah)",
				description: faker.lorem.paragraph(),
				headmaster: {
					create: {
						nip: new Date().getTime().toString(),
						nuptk: new Date().getTime().toString(),
						name: faker.name.findName(),
						address: faker.address.streetAddress(),
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						email: faker.internet.email(),
						password: hashSync("123456", 10),
						phone: faker.phone.number(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
						role: "HEADMASTER",
						emailVerified: true,
					},
				},
			},
		})
		.then(async (department) => {
			//kelas VII
			await prisma.batch
				.create({
					data: {
						name: "VII",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas VII A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "VII A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 6,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas I B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "VII B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 6,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			// kelas VIII
			await prisma.batch
				.create({
					data: {
						name: "VIII",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas VIII A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "VIII A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 5,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas VIII B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "VIII B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 5,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			//kelas IX
			await prisma.batch
				.create({
					data: {
						name: "IX",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas IX A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "IX A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 4,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas IX B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "IX B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 4,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
		});
	// MA
	const ma = await prisma.department
		.create({
			data: {
				name: "MA (Madrasah Aliyah)",
				description: faker.lorem.paragraph(),
				headmaster: {
					create: {
						nip: new Date().getTime().toString(),
						nuptk: new Date().getTime().toString(),
						name: faker.name.findName(),
						address: faker.address.streetAddress(),
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						email: faker.internet.email(),
						password: hashSync("123456", 10),
						phone: faker.phone.number(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
						role: "HEADMASTER",
						emailVerified: true,
					},
				},
			},
		})
		.then(async (department) => {
			//kelas X
			await prisma.batch
				.create({
					data: {
						name: "X",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas X A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "X A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 3,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas X B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "X B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 3,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			// kelas XI
			await prisma.batch
				.create({
					data: {
						name: "XI",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas XI A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "XI A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 2,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas XI B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "XI B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 2,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
			//kelas XII
			await prisma.batch
				.create({
					data: {
						name: "XII",
						description: faker.lorem.paragraph(),
						department: {
							connect: {
								id: department.id,
							},
						},
					},
				})
				.then(async (batch) => {
					//kelas XII A
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "XII A",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 1,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
					//kelas XII B
					await prisma.classRoom
						.create({
							data: {
								capacity: 25,
								description: faker.lorem.paragraph(),
								name: "XII B",
								batch: {
									connect: {
										id: batch.id,
									},
								},
							},
						})
						.then(async (classRoom) => {
							const students: Prisma.StudentCreateManyInput[] = [];
							for (let i = 0; i < 25; i++) {
								const data: Prisma.StudentCreateManyInput = {
									classRoomId: classRoom.id,
									yearId: 1,
									nis: new Date().getTime().toString(),
									nisn: new Date().getTime().toString(),
									name: faker.name.findName(),
									email: faker.internet.email(),
									emailVerified: true,
									phone: faker.phone.number(),
									password: hashSync("123456", 10),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									address: faker.address.streetAddress(),
									photo: faker.image.people(200, 200, true),
									gender: faker.name.gender(true) as Gender,
								};

								students.push(data);
							}
							await prisma.student.createMany({ data: students });
						});
				});
		});
};
// Lesson seeder
const lessonSeed = async () => {
	//MI
	let id = 1;
	for (let i = 0; i < 6; i++) {
		const pendaisData: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: id,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Pendidikan Agama dan Budi Pekerti",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: pendaisData,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 1,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//PPKn
		const ppknData: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: id,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Pendidikan Pancasila dan Kewarganegaran",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ppknData,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 1,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Bahasa Indonesia
		const bhsIndo: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: id,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Bahasa Indonesia",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: bhsIndo,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 1,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Matematika
		const mamaData: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: id,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Matematika",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: mamaData,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 1,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Ilmu Pengetahuan Alam
		const ipaData: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: id,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Ilmu Pengetahuan Alam",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ipaData,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 1,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Ilmu Pengetahuan Sosial
		const ipsData: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: id,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Ilmu Pengetahuan Sosial",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ipsData,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 1,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Seni Budaya dan Prakarya
		const ktkData: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: id,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Seni Budaya dan Prakarya",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ktkData,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 1,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Pendidikan Jasmani, Olahraga, dan Kesehatan
		const penjasData: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: id,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Pendidikan Jasmani, Olahraga, dan Kesehatan",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: penjasData,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 1,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});

		id++;
	}
	//MTS
	let mtsId = 7;
	for (let i = 0; i < 3; i++) {
		//Pendidikan Agama dan Budi Pekerti
		const amagaMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Pendidikan Agama dan Budi Pekerti",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: amagaMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Pendidikan Pancasila dan Kewarganegaraan
		const ppknMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Pendidikan Pancasila dan Kewarganegaraan",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ppknMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Bahasa Indonesia
		const bahasaIndoMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Bahasa Indonesia",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: bahasaIndoMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Matematika
		const mamaMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Matematika",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: mamaMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Ilmu Pengetahuan Alam
		const ipaMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Ilmu Pengetahuan Alam",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ipaMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Ilmu Pengetahuan Sosial
		const ipsMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Ilmu Pengetahuan Sosial",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ipsMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Bahasa Inggris
		const bhsIngMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Bahasa Inggris",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: bhsIngMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Seni Budaya
		const sbMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Seni Budaya",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: sbMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Bahasa Daerah
		const bhsDaerahMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Bahasa Daerah",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: bhsDaerahMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Pendidikan Jasmani, Olahraga dan Kesehatan
		const penjasMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Pendidikan Jasmani, Olahraga dan Kesehatan",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: penjasMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Prakarya
		const prakaryaMts: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: mtsId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Prakarya",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: prakaryaMts,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 2,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});

		id++;
	}
	//MA
	let maId = 1;
	for (let i = 0; i < 3; i++) {
		//Pendidikan Agama
		const agamaMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Pendidikan Agama",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: agamaMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//PPKn
		const ppknMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "PPKn",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ppknMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Bahasa Indonesia
		const biMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Bahasa Indonesia",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: biMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Matematika
		const matematikaMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Matematika",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: biMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//ipa
		const ipaMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "IPA",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ipaMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//ips
		const ipsMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "IPS",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ipsMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Bahasa Inggris
		const englishMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Bahasa Inggris",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: englishMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Seni dan Prakarya
		const seniBudayaMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Seni dan Prakarya",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: seniBudayaMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Pendidikan Jasmani
		const penjasMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Pendidikan Jasmani",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: penjasMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Informatika
		const tikMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Informatika",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: tikMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		//Program Pengembangan Karakter
		const ppkMa: Prisma.LessonCreateInput = {
			batch: {
				connect: {
					id: maId,
				},
			},
			code: faker.random.alphaNumeric(5),
			name: "Program Pengembangan Karakter",
			description: faker.lorem.paragraph(),
		};
		await prisma.lesson
			.create({
				data: ppkMa,
			})
			.then(async (lesson) => {
				await prisma.teacher.create({
					data: {
						department: {
							connect: {
								id: 3,
							},
						},
						batch: {
							connect: {
								id: id,
							},
						},
						lesson: {
							connect: {
								id: lesson.id,
							},
						},
						nip: faker.random.alphaNumeric(10).toUpperCase(),
						nuptk: faker.random.alphaNumeric(10).toUpperCase(),
						name: faker.name.findName(),
						email: faker.internet.email(),
						emailVerified: true,
						phone: faker.phone.number(),
						password: hashSync("123456", 10),
						role: "TEACHER",
						birthDate: faker.date.birthdate(),
						birthPlace: faker.address.streetAddress(),
						address: faker.address.streetAddress(),
						photo: faker.image.people(200, 200, true),
						gender: faker.name.gender(true) as Gender,
					},
				});
			});
		maId++;
	}
};
// Special Program
const specialProgram = async () => {
	const teachers = await prisma.teacher.findMany({
		take: 10,
	});
	teachers.forEach(async (teacher) => {
		const data: Prisma.SpecialProgramCreateInput = {
			name: `Special Program ${faker.lorem.word()}`,
			teacher: {
				connect: {
					id: teacher.id,
				},
			},
			description: faker.lorem.paragraph(),
		};
		await prisma.specialProgram.create({
			data: data,
		});
	});
};
//category and Post
const categoryAndPost = async () => {
	for (let i = 0; i < 5; i++) {
		const categoryData: Prisma.CategoryCreateInput = {
			name: faker.lorem.word(),
			slug: faker.lorem.slug(3),
			description: faker.lorem.paragraph(),
		};
		await prisma.category
			.create({
				data: categoryData,
			})
			.then(async (category) => {
				for (let i = 0; i < 10; i++) {
					const postData: Prisma.PostCreateInput = {
						category: {
							connect: {
								id: category.id,
							},
						},
						slug: faker.lorem.slug(5),
						title: faker.lorem.sentence(),
						body: faker.lorem.paragraphs(5),
					};
					await prisma.post
						.create({
							data: postData,
						})
						.then(async (post) => {
							for (let i = 0; i < 5; i++) {
								await prisma.postImage.create({
									data: {
										post: {
											connect: {
												id: post.id,
											},
										},
										title: faker.image.imageUrl(760, 405, undefined, true),
									},
								});
							}
							await prisma.user.create({
								data: {
									address: faker.address.streetAddress(),
									birthDate: faker.date.birthdate(),
									birthPlace: faker.address.streetAddress(),
									email: faker.internet.email(),
									name: faker.name.findName(),
									password: hashSync("123456", 10),
									phone: faker.phone.number(),
									createdAt: faker.date.past(),
									emailVerified: true,
									photo: faker.image.people(200, 200, true),
									postComments: {
										createMany: {
											data: [
												{
													postId: post.id,
													comment: faker.lorem.paragraph(),
													createdAt: faker.date.past(),
												},
												{
													postId: post.id,
													comment: faker.lorem.paragraph(),
													createdAt: faker.date.past(),
												},
												{
													postId: post.id,
													comment: faker.lorem.paragraph(),
													createdAt: faker.date.past(),
												},
											],
										},
									},
								},
							});
						});
				}
			});
	}
};

const psb = async () => {
	await prisma.psb.create({
		data: {
			name: "PSB 2022",
			description: faker.lorem.paragraph(),
			isActive: true,
		},
	});
};
const adminSeed = async () => {
	await prisma.admin.create({
		data: {
			address: faker.address.streetAddress(),
			birthDate: faker.date.birthdate(),
			birthPlace: faker.address.streetAddress(),
			email: "hamdanilombok@gmail.com",
			password: hashSync("danis3m3t", 10),
			name: "Hamdani Ash-Sidiq",
			phone: "087736690306",
			photo: faker.image.people(200, 200, true),
			emailVerified: true,
		},
	});
};

const evetSeeder = async () => {
	for (let i = 0; i < 10; i++) {
		await prisma.event.create({
			data: {
				description: faker.lorem.paragraph(),
				endDate: faker.date.future(),
				startDate: faker.date.past(),
				location: faker.address.streetAddress(),
				name: faker.lorem.sentence(),
			},
		});
	}
};

const gallerySeeder = async () => {
	for (let i = 0; i < 5; i++) {
		await prisma.gallery
			.create({
				data: {
					name: faker.lorem.words(2),
					description: faker.lorem.paragraph(),
				},
			})
			.then(async (gallery) => {
				for (let i = 0; i < 10; i++) {
					await prisma.galleryImage.create({
						data: {
							caption: faker.lorem.sentence(),
							url: faker.image.imageUrl(380, 330),
							gallery: {
								connect: {
									id: gallery.id,
								},
							},
						},
					});
				}
			});
	}
};

aboutSeed()
	.then(() => yearSeed())
	.then(() => departmentSeed())
	.then(() => lessonSeed())
	.then(() => categoryAndPost())
	.then(() => psb())
	.then(() => adminSeed())
	.then(() => evetSeeder())
	.then(() => gallerySeeder())

	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
