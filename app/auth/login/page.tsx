"use client";

// pages/login.tsx
import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add your login logic here
		console.log("Login attempted with:", { email, password });
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
				<div className="text-center mb-6">
					<h1 className="text-2xl font-bold text-blue-600">TASK-WAN</h1>
					<p className="text-gray-500">Management App</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<Label htmlFor="email" value="Email" className="block mb-1" />
						<TextInput
							id="email"
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							icon={FiMail}
							required
						/>
					</div>
					<div>
						<Label htmlFor="password" value="Password" className="block mb-1" />
						<TextInput
							id="password"
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							icon={FiLock}
							required
						/>
					</div>
					<div className="flex justify-end">
						<a
							href="/forgot-password"
							className="text-sm text-blue-600 hover:underline"
						>
							Forgot password?
						</a>
					</div>
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700"
					>
						Login
					</Button>
				</form>

				<div className="mt-4 text-center">
					<p className="text-gray-500">— Or sign in with —</p>
					<div className="flex justify-center gap-4 mt-2">
						<Button color="light" size="sm">
							<FcGoogle />
						</Button>
						<Button color="light" size="sm">
							<FaFacebook />
						</Button>
						<Button color="light" size="sm">
							<FaTwitter />
						</Button>
					</div>
				</div>

				<p className="mt-4 text-center text-gray-500">
					Don’t have an account?{" "}
					<a href="/signup" className="text-blue-600 hover:underline">
						Sign Up
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
