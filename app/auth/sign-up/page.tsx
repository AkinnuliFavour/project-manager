"use client"

// pages/signup.tsx
import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const SignupPage = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		// Add your signup logic here
		console.log("Signup attempted with:", { username, email, password });
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-md p-8 bg-white shadow-md">
				<div className="text-center mb-6">
					<h1 className="text-2xl font-bold text-blue-600">TASK-WAN</h1>
					<p className="text-gray-500">Management App</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<Label htmlFor="username" value="Username" className="block mb-1" />
						<TextInput
							id="username"
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							icon={FiUser}
							required
						/>
					</div>
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
					<div>
						<Label
							htmlFor="confirmPassword"
							value="Confirm Password"
							className="block mb-1"
						/>
						<TextInput
							id="confirmPassword"
							type="password"
							placeholder="Confirm your password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							icon={FiLock}
							required
						/>
					</div>
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700"
					>
						Register
					</Button>
				</form>

				<div className="mt-4 text-center">
					<p className="text-gray-500">— Or register with —</p>
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
					Already have an account?{" "}
					<a href="/login" className="text-blue-600 hover:underline">
						Login
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignupPage;
