import { CategoryWithDetails } from "common";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

const WidgetCategory = () => {
	const { data, isFetching } = useQuery<CategoryWithDetails[]>(
		"categories",
		async () => {
			// await new Promise((res) => setTimeout(res, 1000));
			const res = await fetch("/api/category/all");
			const data = await res.json();

			return data.categories;
		}
	);

	return (
		<div className="widget widget-category">
			<div className="widget-header">
				<h5>Post Categories</h5>
			</div>
			<ul className="lab-ul widget-wrapper list-bg-none">
				{data !== undefined
					? data.map((category) => (
							<li key={category.id}>
								<Link href={`/category/${category.slug}`}>
									<a className="d-flex flex-wrap justify-content-between">
										<span>
											<i className="icofont-rounded-double-right"></i>
											{category.name}
										</span>
										<span>{category._count.posts}</span>
									</a>
								</Link>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
};

export default WidgetCategory;
