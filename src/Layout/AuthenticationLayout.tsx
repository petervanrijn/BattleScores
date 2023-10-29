import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

interface AuthenticationLayoutProps {
	children?: ReactNode;
}

const AuthenticationLayout: FC<AuthenticationLayoutProps> = ({ children }) => {
	return <div className="min-h-screen flex items-center justify-center">{children || <Outlet />}</div>;
};

AuthenticationLayout.propTypes = {
	children: PropTypes.node,
};

export default AuthenticationLayout;
