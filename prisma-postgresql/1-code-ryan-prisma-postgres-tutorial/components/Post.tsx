import React from "react";

interface PostProps {
	id: string;
	title?: string;
	content?: string | null;
    authorname?: string | null;
}

const Post = ({ id, title, content, authorname }: PostProps) => {
	console.log(id)
	return (
		<div className="flex flex-col gap-3">
			{title ? (
				<div className="flex flex-col gap-2">
                    <h1 className="text-2xl">{title}</h1>
                    <span className="text-sm text-slate-500">{authorname}</span>
                </div>
			) : (
				<h1 className="text-2xl text-slate-400">
					Doesn't have a title!
				</h1>
			)}
			<hr />
			{content ? (
				<p className="text-base">{content}</p>
			) : (
				<p className="text-base text-slate-400">
					Doesn't have a content!
				</p>
			)}
			<button className="btn">Delete me</button>
		</div>
	);
};

export default Post;
