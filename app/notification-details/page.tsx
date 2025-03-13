"use client";

// pages/statistics.tsx
import React from "react";
import { Button } from "flowbite-react";
import {
	FiHome,
	FiCalendar,
	FiUser,
	FiCheckCircle,
	FiArrowLeft,
} from "react-icons/fi";

const NotificationDetailsPage = () => {
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-blue-600">
						See your statistic!
					</h1>
					<Button color="light" size="sm" pill>
						<FiCheckCircle />
					</Button>
				</div>

				{/* Content */}
				<div className="space-y-6">
					<p className="text-gray-700">
						<span className="font-semibold">Hello Phillip,</span> let’s see your
						progress in 2025, and fix it soon. Go ahead and get the best results
						this year. Add your tasks and time them, to make it easier.
					</p>
					<p className="text-sm text-gray-500">4 March 2025</p>
				</div>

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

export default NotificationDetailsPage;
