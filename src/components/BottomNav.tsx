import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

import superbase from "../config/supabaseClient.js";

interface BottomNavProps extends React.HTMLAttributes<HTMLDivElement> {
	items: {
		href: string;
		title: string;
		icon: React.ReactNode;
	}[];
}

const BottomNav = ({ className, items, ...props }: BottomNavProps) => {
	const location = useLocation();
	const LogOut = async () => {
		await superbase.auth.signOut();
		window.location.reload();
	};

	return (
		<nav
			className={cn("flex justify-between items-center p-4 md:hidden border-t ", className)}
			{...props}>
			{items?.map((item) => {
				if (item.title === "Logout") {
					return (
						<Button
							key={item.href}
							className={cn(buttonVariants({ variant: "destructive" }), "flex flex-col h-16 hover:bg-transparent hover:underline")}
							onClick={() => LogOut()}>
							{item.icon}
							{item.title}
						</Button>
					);
				} else
					return (
						<NavLink
							key={item.href}
							to={item.href}
							className={cn(
								buttonVariants({ variant: "ghost" }),
								location.pathname === item.href
									? "flex flex-col h-16 bg-muted hover:bg-muted "
									: "flex flex-col h-16 hover:bg-transparent hover:underline",
								"justify-start"
							)}>
							{item.icon}
							{item.title}
						</NavLink>
					);
			})}
		</nav>
	);
};

export default BottomNav;
