import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import SinglePostPage from "./pages/SinglePostPage";
import PostListPage from "./pages/PostListPage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/write",
				element: <WritePage />,
			},
			{
				path: "/:[slug]",
				element: <SinglePostPage />,
			},
			{
				path: "/posts",
				element: <PostListPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
