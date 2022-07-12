import React from "react";

interface Pros {
	title: string;
}

const PageHeader: React.FC<Pros> = ({ title }) => {
	return (
		<section className="page-header bg_img padding-tb">
			<div className="overlay"></div>
			<div className="container">
				<div className="page-header-content-area">
					<h4 className="ph-title">{title}</h4>
					<ul className="lab-ul">
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>
							<a className="active">About</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default PageHeader;
