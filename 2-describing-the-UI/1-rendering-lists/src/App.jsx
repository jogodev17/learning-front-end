import { useState } from "react";
import ArticleList from "./components/ArticleList";
import SearchArticle from "./components/SearchArticle";
import { getArticles } from "./lib/utils";

// TODO
// 1) Create a separate data with API

function App() {
	const [query, setQuery] = useState("lo");
	const articles = getArticles(query);

	const handleQuery = (e) => {
		const inputValue = e.target.value;
		if (inputValue === "") {
			setQuery("lo");
		} else {
			setQuery(inputValue);
		}
	};

	return (
		<main className="w-full">
			<SearchArticle handleQuery={handleQuery} />

			<ArticleList articles={articles} />
		</main>
	);
}

export default App;
