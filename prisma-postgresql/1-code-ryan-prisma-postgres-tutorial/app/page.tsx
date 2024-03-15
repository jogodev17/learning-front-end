import Post from "@/components/Post";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { useState } from "react";

async function getPosts() {
    const posts = await prisma.post.findMany({
        where: {published: true},
        include: {
            author: {
                select: {name:true}
            }
        }
    })
    return posts
}

export default async function Home() {
    const posts = await getPosts();

	return (
		<main className="w-full h-screen flex items-start justify-center">
            <Link
                href='/add-post'
                className="py-2 px-8 bg-green-400 text-white"
            >
                ADD POST
                </Link>

			<div className="w-[450px] flex flex-col justify-start items-start gap-2 p-4 my-4 overflow-hidden">
                <h1 className="text-2xl self-center">Feed</h1>

                {posts ? (
                    posts.map((post) => (
                        <Post 
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        authorname={post.author?.name}
                        content={post.content}
                    />
                    ))
                ) : (
                    <span>Dosn't have any posts!</span>
                )}
            </div>
		</main>
	);
}
