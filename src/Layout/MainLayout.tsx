import type { FC, ReactNode } from "react";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Icons } from "../components/Icons";
import supabase from "../config/supabaseClient.js";
interface MainLayoutProps {
	children?: ReactNode;
}
const {
	data: { user },
} = await supabase.auth.getUser();
console.log(user);
interface UserContextProps {
	readonly user: UserData | null;
	readonly setUserData: (userData: UserData) => void;
	readonly loadUserData: () => Promise<void>;
}

type UserData = {
	id: string;
	aud: string;
	role: string;
	email: string;
	email_confirmed_at: string;
	confirmation_sent_at: string;
	last_sign_in_at: string;
	created_at: string;
	updated_at: string;
};
const UserContext = React.createContext<UserContextProps>({
	user: null,
	setUserData: () => {},
	loadUserData: async () => {},
});

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const [mobileNavigationItems, setMobileNavigationItems] = useState<object | null>(null);
	const [user, setUser] = useState<object | null>({});
	async function loggenIn() {
		const { data } = await supabase.auth.getSession();
		console.log(data.session);
		if (data.session) {
			await supabase.auth.getUser().then((value) => {
				if (value.data?.user) {
					setUser(value.data.user);
				}
			});

			setMobileNavigationItems([
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
					title: "Logout",
					icon: <Icons.logOut />,
					href: "/authentication/logOut",
				},
			]);
		} else {
			setMobileNavigationItems([
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
			]);
		}
	}
	useEffect(() => {
		loggenIn();
	}, []);
	return (
		<UserContext.Provider value={user}>
			<div className="flex flex-col justify-between min-h-screen ">
				<Header />

				<div className=" mx-auto w-full max-w-7xl flex-1 py-3 px-4">
					<div className="px-4 ">{children || <Outlet />}</div>
				</div>
				<BottomNav items={mobileNavigationItems} />
			</div>
		</UserContext.Provider>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node,
};

export default MainLayout;
