import { useState } from "react";
import { getArticles } from "../lib/articles";
import Table from "../components/Table";

function App() {
	const [query, setQuery] = useState('');
	const articles = getArticles(query);
	return (
		<>
		<input type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
			<Table articles={articles} />
		</>
	);
}

export default App;
