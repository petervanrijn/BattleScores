import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface BottomNavProps extends React.HTMLAttributes<HTMLDivElement> {
	items: {
		href: string;
		title: string;
		icon: React.ReactNode;
	}[];
}

const BottomNav = ({ className, items, ...props }: BottomNavProps) => {
	const location = useLocation();

	return (
		<nav
			className={cn("flex justify-between items-center p-4 md:hidden border-t ", className)}
			{...props}>
			{items?.map((item) => (
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
			))}
		</nav>
	);
};

export default BottomNav;
