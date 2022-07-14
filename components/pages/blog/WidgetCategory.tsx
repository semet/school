import React from "react";

const WidgetCategory = () => {
	return (
		<div className="widget widget-category">
			<div className="widget-header">
				<h5>Post Categories</h5>
			</div>
			<ul className="lab-ul widget-wrapper list-bg-none">
				<li>
					<a href="#" className="d-flex flex-wrap justify-content-between">
						<span>
							<i className="icofont-rounded-double-right"></i>Show all
						</span>
						<span>18</span>
					</a>
				</li>
				<li>
					<a href="#" className="d-flex flex-wrap justify-content-between">
						<span>
							<i className="icofont-rounded-double-right"></i>Business
						</span>
						<span>20</span>
					</a>
				</li>
				<li>
					<a href="#" className="d-flex flex-wrap justify-content-between">
						<span>
							<i className="icofont-rounded-double-right"></i>Creative
						</span>
						<span>25</span>
					</a>
				</li>
				<li>
					<a href="#" className="d-flex flex-wrap justify-content-between">
						<span>
							<i className="icofont-rounded-double-right"></i>Inspiation
						</span>
						<span>30</span>
					</a>
				</li>
				<li>
					<a href="#" className="d-flex flex-wrap justify-content-between">
						<span>
							<i className="icofont-rounded-double-right"></i>News
						</span>
						<span>28</span>
					</a>
				</li>
				<li>
					<a href="#" className="d-flex flex-wrap justify-content-between">
						<span>
							<i className="icofont-rounded-double-right"></i>Photography
						</span>
						<span>20</span>
					</a>
				</li>
				<li>
					<a href="#" className="d-flex flex-wrap justify-content-between">
						<span>
							<i className="icofont-rounded-double-right"></i>Smart
						</span>
						<span>26</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default WidgetCategory;
