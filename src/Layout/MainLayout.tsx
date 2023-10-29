import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Icons } from "../components/Icons";

interface MainLayoutProps {
	children?: ReactNode;
}

const MobileNavigationItems = [
	{
		title: "Home",
		icon: <Icons.home />,
		href: "/",
	},
	{
		title: "Scores",
		icon: <Icons.soccor />,
		href: "/battle-scores",
	},

	{
		title: "Login",
		icon: <Icons.logo />,
		href: "/authentication/login",
	},
];

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col justify-between min-h-screen ">
			<Header />
			<div className=" mx-auto w-full max-w-7xl flex-1 py-3 px-4">
				<div className="px-4 ">{children || <Outlet />}</div>
			</div>
			<BottomNav items={MobileNavigationItems} />
		</div>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node,
};

export default MainLayout;
