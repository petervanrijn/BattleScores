import Container from "./ui/container";
import { Navigation } from "./Navigation";

export const Header = () => {
	return (
		<header className="sm:flex sm:justify-between py-3 px-4 border-b">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-end">
					<Navigation />
				</div>
			</Container>
		</header>
	);
};

export default Header;
