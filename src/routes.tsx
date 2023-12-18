// import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";
// import { LoadingScreen } from "./components/LoadingScreen";
import MainLayout from "./Layout/MainLayout";
import AuthenticationLayout from "./Layout/AuthenticationLayout";
import Home from "./Pages/home/Home";
import Scores from "./Pages/scores/Scores";
import Test from "./Pages/test/Test";
import Login from "./Pages/authentication/Login";
// import Register from "./Pages/authentication/Register";

const routes: RouteObject[] = [
	{
		path: "authentication",
		element: <AuthenticationLayout />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				// element: <Register />,
			},
		],
	},
	{
		path: "*",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "dashboard",
				// element: <Home />
			},
			{
				path: "profile",
				// element: <Home />
			},
			{
				path: "battle-scores",
				element: <Scores />,
			},
			{
				path: "settings",
				// element: <Home />
			},
			{
				path: "test",
				element: <Test />,
			},
		],
	},
];

export default routes;
