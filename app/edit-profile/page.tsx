"use client";

// pages/edit-profile.tsx
import React, { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import {
	FiHome,
	FiCalendar,
	FiUser,
	FiCheckCircle,
	FiArrowLeft,
} from "react-icons/fi";

const UserProfilePage = () => {
	const [profile, setProfile] = useState({
		name: "Phillip Williamson",
		profession: "UI/UX Designer",
		dateOfBirth: "Dec-10-2001",
		email: "phillip@gmail.com",
		location: "Mojokerto, Indonesia",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setProfile((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add your update profile logic here (e.g., API call)
		console.log("Profile updated with:", profile);
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-white">My Profile</h1>
					<Button color="light" size="sm" pill>
						<FiCheckCircle />
					</Button>
				</div>

				{/* Profile Form */}
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="flex items-center gap-4 mb-4">
						<img
							src="https://via.placeholder.com/80" // Replace with actual user image URL
							alt="Profile"
							className="w-20 h-20 rounded-full object-cover"
						/>
						<Button color="light" size="sm" className="text-blue-600">
							Edit Photo
						</Button>
					</div>

					{/* Name */}
					<div>
						<Label htmlFor="name" value="Name" className="block mb-1" />
						<TextInput
							id="name"
							type="text"
							name="name"
							value={profile.name}
							onChange={handleInputChange}
							required
						/>
					</div>

					{/* Profession */}
					<div>
						<Label
							htmlFor="profession"
							value="Profession"
							className="block mb-1"
						/>
						<TextInput
							id="profession"
							type="text"
							name="profession"
							value={profile.profession}
							onChange={handleInputChange}
							required
						/>
					</div>

					{/* Date of Birth */}
					<div>
						<Label
							htmlFor="dateOfBirth"
							value="Date of Birth"
							className="block mb-1"
						/>
						<TextInput
							id="dateOfBirth"
							type="text"
							name="dateOfBirth"
							value={profile.dateOfBirth}
							onChange={handleInputChange}
							icon={FiCalendar}
							required
						/>
					</div>

					{/* Email */}
					<div>
						<Label htmlFor="email" value="Email" className="block mb-1" />
						<TextInput
							id="email"
							type="email"
							name="email"
							value={profile.email}
							onChange={handleInputChange}
							required
						/>
					</div>

					{/* Location */}
					<div>
						<Label htmlFor="location" value="Location" className="block mb-1" />
						<TextInput
							id="location"
							type="text"
							name="location"
							value={profile.location}
							onChange={handleInputChange}
							required
						/>
					</div>

					{/* Submit Button */}
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700"
					>
						Save
					</Button>
				</form>

				{/* Navigation Icons (Bottom Bar for Web - Styled as a Footer) */}
				<div className="mt-8 flex justify-around border-t pt-4">
					<Button color="light" size="sm">
						<FiHome />
					</Button>
					<Button color="light" size="sm">
						<FiCalendar />
					</Button>
					<Button color="light" size="sm">
						<FiUser />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default UserProfilePage;
