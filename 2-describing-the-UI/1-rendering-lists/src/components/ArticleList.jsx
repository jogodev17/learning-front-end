import Card from "./Card";

const ArticleList = ({ articles }) => {
	return (
		<div className="w-full">
			<ul className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 p-6">
				{articles.map(
					({title, publishDate, description, image }) => (
						<li key={title}>
							<Card
								title={title}
								publishDate={publishDate}
								description={description}
								image={image}
							/>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default ArticleList;
