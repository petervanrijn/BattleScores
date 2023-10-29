import LoginForm from "../../components/Form/LoginForm";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<LoginForm />
			</CardContent>
		</Card>
	);
};

export default Login;
