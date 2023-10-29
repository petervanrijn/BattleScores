import Container from "./ui/container";
import { Navigation } from "./Navigation";
import Logo from "./Logo";
export const Header = () => {
	return (
		<header className="justify-between py-3 border-b  ">
			<Container>
				<div className="hidden md:flex  relative px-4 sm:px-6 lg:px-8  h-16 items-center justify-between">
					<Logo />
					<Navigation />
				</div>
				<div className="flex md:hidden relative px-4 sm:px-6 lg:px-8 h-16 justify-center space-x-2 items-center">
					<Logo />
					<h1 className=" text-2xl font-semibold">Gekke BattleScores</h1>
				</div>
			</Container>
		</header>
	);
};

export default Header;
