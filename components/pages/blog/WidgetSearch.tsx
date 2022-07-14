import React from "react";

const WidgetSearch = () => {
	return (
		<div className="widget widget-search">
			<div className="widget-header">
				<h5>Search Your keywords</h5>
			</div>
			<form action="/" className="search-wrapper">
				<input type="text" name="s" placeholder="Search Here..." />
				<button type="submit">
					<i className="icofont-search-2"></i>
				</button>
			</form>
		</div>
	);
};

export default WidgetSearch;
