import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

interface MainLayoutProps {
	children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div>{children || <Outlet />}</div>
		</>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node,
};

export default MainLayout;
