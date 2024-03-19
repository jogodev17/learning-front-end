import React from "react";

const SearchArticle = ({handleQuery}) => {
	return (
		<input
			type="text"
			placeholder="search..."
			onChange={(e) => handleQuery(e)}
            className="block w-4/5 py-2 px-6 m-auto border-[1px] border-black rounded-full shadow-md"
		/>
	);
};

export default SearchArticle;
