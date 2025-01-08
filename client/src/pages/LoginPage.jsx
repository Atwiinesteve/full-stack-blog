import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function LoginPage() {
	return (
		<div className="flex items-center justify-center h-[calc(100vh-80px)]">
			<SignIn signUpUrl="/register" />
		</div>
	);
}
