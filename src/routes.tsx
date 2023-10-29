import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";
import { LoadingScreen } from "./components/LoadingScreen";
import MainLayout from "./Layout/MainLayout";
import AuthenticationLayout from "./Layout/AuthenticationLayout";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
	(
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import("./Pages/authentication/Login")));
// const Register = Loadable(lazy(() => import("./pages/authentication/Register")));

//  * HOME PAGE
const Home = Loadable(lazy(() => import("./Pages/home/Home")));

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
				// element: <Register />,s
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
				path: "scores",
				// element: <Home />
			},
			{
				path: "settings",
				// element: <Home />
			},
		],
	},
];

export default routes;
