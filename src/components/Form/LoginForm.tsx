"use client";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import supabase from "../../config/supabaseClient.js";

const loginSchema = z.object({
	email: z.string(),
	password: z
		.string()
		.min(8, {
			message: "Password must be at least 8 characters.",
		})
		.max(100),
});

const SignIn = async (values: z.infer<typeof loginSchema>) => {
	const { error } = await supabase.auth.signInWithPassword({
		email: values.email,
		password: values.password,
	});
	if (error) {
		// Behandel eventuele fouten bij het inloggen
		console.error("Fout bij inloggen:", error.message);
	} else {
		// Inloggen was succesvol, 'user' bevat de gebruikersgegevens
		const {
			data: { user },
		} = await supabase.auth.getUser();
		console.log("Inloggen was succesvol:", user);
		window.history.back();
	}
};
function LoginForm() {
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	function onSubmit(values: z.infer<typeof loginSchema>) {
		SignIn(values);
		// call to the subabase for a token on session
		// if successfull, redirect to the dashboard
	}
	function goBack() {
		window.history.back();
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="email@provider"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* <Button
						className="text-sm italic px-0"
						variant={"link"}
						onClick={() => navigate("/authentication/register")}>
						Ik heb nog geen account
					</Button> */}
				</div>
				<div className="flex w-full justify-between">
					<Button
						variant={"ghost"}
						type="button"
						onClick={goBack}>
						Cancel
					</Button>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</Form>
	);
}

export default LoginForm;
