import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

export default function HomePage() {
	return (
		<div className="mt-4 flex flex-col gap-4">
			{/* BREADCRUMPS */}
			<div className="flex gap-4">
				<Link to="/">Home</Link>
				<span>
					<GoDotFill />
				</span>
				<span className="text-blue-800">Blogs and Articles</span>
			</div>

			{/* INTRODUCTION */}
			<div className="flex items-center justify-between">
				{/* Titles */}
				<div className="">
					<h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</h1>
					<p className="mt-8 text-md md:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quidem.
					</p>
				</div>
				{/* Animated button */}
				<Link to="write" className="hidden md:block relative">
					<svg
						className="text-lg tracking-widest animate-spin animatedText"
						viewBox="0 0 200 200"
						width="200"
						height="200">
						<path
							fill="none"
							id="circlePath"
							d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
						/>
						<text>
							<textPath xlinkHref="#circlePath" startOffset="0%">
								Write your Story *
							</textPath>
							<textPath href="#circlePath" startOffset="50%">
								Share your Idea *
							</textPath>
						</text>
					</svg>
					<button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
						<MdArrowOutward color="white" size="30" />
					</button>
				</Link>
			</div>

			{/* MAIN POST CATEGORIES */}
			<MainCategories />

			{/* FEATURED POSTS */}
			<FeaturedPosts />

			{/* POST LIST */}
			<div className="">
				<h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
				<PostList />
			</div>
		</div>
	);
}
