import { ThemeProvider } from "@/components/theme-provider";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
	const content = useRoutes(routes);
	return (
		<ThemeProvider
			defaultTheme="dark"
			storageKey="vite-ui-theme">
			{content}
		</ThemeProvider>
	);
}

export default App;
