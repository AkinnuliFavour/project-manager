"use client";

// pages/profile.tsx
import React from "react";
import { Button, Modal } from "flowbite-react";
import {
	FiHome,
	FiCalendar,
	FiUser,
	FiCheckCircle,
	FiArrowLeft,
	FiLogOut,
	FiSettings,
	FiBell,
	FiMapPin,
} from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
	const [isLogoutModalOpen, setIsLogoutModalOpen] = React.useState(false);

	const router = useRouter();
	return (
		<>
			{/* Header */}
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-white">Profile</h1>
				<Button color="light" size="sm" pill>
					<FiCheckCircle />
				</Button>
			</div>

			{/* Profile Content */}
			<div className="space-y-4">
				<div className="flex items-center gap-4">
					<img
						src="https://via.placeholder.com/80" // Replace with actual user image URL
						alt="Profile"
						className="w-20 h-20 rounded-full object-cover"
					/>
					<div>
						<h2 className="text-xl font-semibold text-gray-800">
							Phillip Williamson
						</h2>
						<p className="text-gray-600">UI/UX Designer</p>
						<p className="text-gray-500">Mojokerto, Indonesia</p>
						<p className="text-blue-600">2050 Tasks Completed</p>
					</div>
				</div>

				{/* Navigation Menu */}
				<div className="space-y-2">
					<Button
						color="light"
						size="sm"
						className="w-full flex justify-start items-center text-gray-700 hover:bg-gray-100"
						onClick={() => router.push("/edit-profile")} // Add navigation logic
					>
						<FiUser className="mr-2 h-5 w-5" /> My Profile
					</Button>
					<Button
						color="light"
						size="sm"
						className="w-full flex justify-start items-center text-gray-700 hover:bg-gray-100"
						onClick={() => router.push("/statistics")} // Add navigation logic
					>
						<FiBell className="mr-2 h-5 w-5" /> Statistic
					</Button>
					<Button
						color="light"
						size="sm"
						className="w-full flex justify-start items-center text-gray-700 hover:bg-gray-100"
						onClick={() => router.push("/notifications")} // Add navigation logic
					>
						<FiMapPin className="mr-2 h-5 w-5" /> Notifications
					</Button>
					<Button
						color="light"
						size="sm"
						className="w-full justify-start text-red-600 hover:bg-red-100"
						onClick={() => setIsLogoutModalOpen(true)}
					>
						<FiLogOut className="mr-2 h-5 w-5" /> Logout
					</Button>
				</div>
			</div>

			{/* Logout Confirmation Modal */}
			<Modal
				show={isLogoutModalOpen}
				onClose={() => setIsLogoutModalOpen(false)}
			>
				<Modal.Header>Logout of Taskwan?</Modal.Header>
				<Modal.Body>
					<div className="space-y-4">
						<p className="text-gray-700">Are you sure you want to logout?</p>
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								id="rememberLogin"
								className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label htmlFor="rememberLogin" className="text-gray-700">
								Remember my login info
							</label>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button color="blue" onClick={() => setIsLogoutModalOpen(false)}>
						Logout
					</Button>
					<Button color="light" onClick={() => setIsLogoutModalOpen(false)}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ProfilePage;
