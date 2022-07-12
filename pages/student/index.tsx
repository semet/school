import { Batch, ClassRoom, Department, Year } from "@prisma/client";
import { StudentWithDetails } from "common";
import { GetStaticProps, NextPageWithLayout } from "next";
import Head from "next/head";
import React, { Fragment, ReactElement, useState } from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import MainLayout from "../../components/layouts/MainLayout";
import StudentCard from "../../components/pages/student/StudentCard";
import PageHeader from "../../components/partials/PageHeader";
import { prisma } from "../../prisma/db";

interface Props {
	departments: Department[];
	years: Year[];
}

const StudentPage: NextPageWithLayout<Props> = ({ departments, years }) => {
	const [selectedDepartment, setSelectedDepartment] = useState("");
	const [batches, setBatches] = useState<Batch[]>([]);
	const [selectedBatch, setSelectedBatch] = useState("");
	const [classRooms, setClassRooms] = useState<ClassRoom[]>([]);
	const [selectedClassRoom, setSelectedClassRoom] = useState("");
	const [selectedYear, setSelectedYear] = useState("");
	const [students, setStudents] = useState<StudentWithDetails[]>([]);

	//react query
	const { data, error, refetch, isLoading, isFetching } = useQuery<StudentWithDetails[]>(
		["students", selectedYear, selectedClassRoom],
		async () => {
			await new Promise((res) => setTimeout(res, 1000));

			const res = await fetch(
				`/api/student/all?year=${selectedYear}&classRoom=${selectedClassRoom}`
			);
			const data = await res.json();
			if ((data.students as StudentWithDetails[]).length === 0) {
				Swal.fire({
					title: "No Student Found",
					icon: "error",
				});
			}
			return data.students;
		},
		{
			enabled: false,
		}
	);
	const handleDepartmentChange = async (e: string) => {
		setSelectedDepartment(e);

		const response = await fetch(`/api/batch?department=${e}`);
		const data = await response.json();
		setBatches(data.batches);
	};

	const handleBatchChange = async (e: string) => {
		setSelectedBatch(e);
		const response = await fetch(`/api/classroom?batch=${e}`);
		const data = await response.json();
		setClassRooms(data.classRooms);
	};

	const handleYearChange = async (e: string) => {
		new Promise<void>((resolve) => {
			setSelectedYear(e);
			resolve();
		}).then(async () => {
			await refetch();
		});
	};
	return (
		<Fragment>
			<Head>
				<title>Santri Abu Darda</title>
			</Head>
			{/* Individual Page Header */}
			<PageHeader title="Santri Abu Darda" />
			{/* Content */}
			<div className="team-section padding-tb">
				<div className="container">
					<div className="card p-2">
						<div className="row">
							<div className="col-4">
								<select
									className="form-select"
									onChange={(e) => handleDepartmentChange(e.currentTarget.value)}
								>
									<option value="">Department</option>
									{departments.map((department) => (
										<option value={department.id} key={department.id}>
											{department.name}
										</option>
									))}
								</select>
							</div>
							<div className="col-2">
								<select
									className="form-select"
									onChange={(e) => handleBatchChange(e.currentTarget.value)}
								>
									<option value="">
										{batches.length === 0
											? "Select Department first"
											: "Select Batch"}
									</option>
									{batches.map((batch) => (
										<option value={batch.id} key={batch.id}>
											{batch.name}
										</option>
									))}
								</select>
							</div>
							<div className="col-2">
								<select
									className="form-select"
									onChange={(e) => setSelectedClassRoom(e.currentTarget.value)}
								>
									<option value="">
										{batches.length === 0 ? "Select Batch first" : "Class Room"}
									</option>
									{classRooms.map((room) => (
										<option value={room.id} key={room.id}>
											{room.name}
										</option>
									))}
								</select>
							</div>
							<div className="col-2">
								<select
									className="form-select"
									disabled={batches.length === 0 && classRooms.length === 0}
									onChange={(e) => handleYearChange(e.currentTarget.value)}
								>
									<option value="">Year</option>
									{years.map((year) => (
										<option value={year.id} key={year.id}>
											{year.name}
										</option>
									))}
								</select>
							</div>
							{isFetching && (
								<div className="col-2">
									<div className="spinner-border" role="status">
										<span className="visually-hidden">Loading...</span>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-12">
							<div className="row justify-content-center">
								{/* Student Card */}
								{data !== undefined && data?.length > 0
									? data?.map((student) => (
											<StudentCard student={student} key={student.id} />
									  ))
									: null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

StudentPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default StudentPage;

export const getStaticProps: GetStaticProps = async () => {
	const departments = await prisma.department.findMany();
	const years = await prisma.year.findMany();
	return {
		props: {
			departments: JSON.parse(JSON.stringify(departments)),
			years: JSON.parse(JSON.stringify(years)),
		},
	};
};
