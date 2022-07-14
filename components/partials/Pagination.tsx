import React, { SetStateAction, useEffect, useState } from "react";
import { DOTS, usePagination } from "../../utils/usePagination";

interface Props {
	onPageChange: (value: React.SetStateAction<number>) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className: string;
}

const Pagination: React.FC<Props> = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	useEffect(() => {
		console.log("currentPage", currentPage);
	}, [currentPage]);

	if (currentPage === 0 || paginationRange!.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange![paginationRange!.length - 1];

	return (
		<div className="paginations">
			&#8230;
			<ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
				<li>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							onPrevious();
						}}
						className={currentPage === 1 ? "pagination-link-disabled" : ""}
					>
						<i className="icofont-rounded-double-left"></i>
					</a>
				</li>
				{paginationRange!.map((pageNumber, idx) => {
					if (pageNumber === DOTS) {
						return <li key={idx}>&#8230;</li>;
					}

					return (
						<li key={idx}>
							<a
								className={currentPage === pageNumber ? "active" : ""}
								href="#"
								onClick={(e) => {
									e.preventDefault();
									onPageChange(pageNumber as SetStateAction<number>);
								}}
							>
								{pageNumber}
							</a>
						</li>
					);
				})}
				<li>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							onNext();
						}}
						className={
							totalCount / pageSize <= currentPage
								? "pagination-link-disabled"
								: ""
						}
					>
						<i className="icofont-rounded-double-right"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
