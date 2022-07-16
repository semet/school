import React from "react";
import WidgetArchive from "./WidgetArchive";
import WidgetCategory from "./WidgetCategory";
import WidgetRecentPosts from "./WidgetRecentPosts";
import WidgetSearch from "./WidgetSearch";

const BlogSidebar = () => {
	return (
		<aside className="ps-lg-4">
			{/* Search */}
			<WidgetSearch />

			{/* Category */}
			<WidgetCategory />

			{/* Recent Post */}
			<WidgetRecentPosts />

			{/* Archive */}
			{/* <WidgetArchive /> */}

			{/* Tag */}
		</aside>
	);
};

export default BlogSidebar;
