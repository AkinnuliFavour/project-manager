"use client";

// pages/notifications.tsx
import React from "react";
import { Button, ListGroup } from "flowbite-react";
import {
	FiHome,
	FiCalendar,
	FiUser,
	FiCheckCircle,
	FiBell,
} from "react-icons/fi";

const NotificationsPage = () => {
	// Sample notification data
	const notifications = [
		{
			id: 1,
			message: "See your statistic!",
			date: "4 March 2025",
			icon: FiBell,
			isRead: false,
		},
		{
			id: 2,
			message: "Task completed: You have completed all the tasks for today.",
			date: "3 March 2025",
			icon: FiCheckCircle,
			isRead: true,
		},
		{
			id: 3,
			message: "UI Task less than 8 days away from reaching deadline.",
			date: "2 March 2025",
			icon: FiBell,
			isRead: false,
		},
		{
			id: 4,
			message: "See your statistic!",
			date: "1 March 2025",
			icon: FiBell,
			isRead: false,
		},
		{
			id: 5,
			message: "Task completed: You have completed all the tasks for today.",
			date: "28 Feb 2025",
			icon: FiCheckCircle,
			isRead: true,
		},
		{
			id: 6,
			message: "Edit Task less than 12 days away from reaching deadline.",
			date: "27 Feb 2025",
			icon: FiBell,
			isRead: false,
		},
		{
			id: 7,
			message: "Photo Task less than 15 days away from reaching deadline.",
			date: "26 Feb 2025",
			icon: FiBell,
			isRead: false,
		},
		{
			id: 8,
			message: "Task completed: You have completed all the tasks for today.",
			date: "25 Feb 2025",
			icon: FiCheckCircle,
			isRead: true,
		},
		{
			id: 9,
			message: "UI Task less than 28 days away from reaching deadline.",
			date: "24 Feb 2025",
			icon: FiBell,
			isRead: false,
		},
		{
			id: 10,
			message: "See your statistic!",
			date: "23 Feb 2025",
			icon: FiBell,
			isRead: false,
		},
	];

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-blue-600">Notification</h1>
					<Button color="light" size="sm" pill>
						<FiCheckCircle />
					</Button>
				</div>

				{/* Notifications List */}
				<ListGroup>
					{notifications.map((notification) => (
						<ListGroup.Item key={notification.id} className="p-2">
							<div className="flex items-center gap-2">
								<notification.icon
									className={`h-5 w-5 ${
										notification.isRead ? "text-gray-400" : "text-blue-600"
									}`}
								/>
								<div className="flex-1">
									<p
										className={`text-gray-700 ${
											notification.isRead ? "text-gray-400" : ""
										}`}
									>
										{notification.message}
									</p>
									<p className="text-sm text-gray-500">{notification.date}</p>
								</div>
							</div>
						</ListGroup.Item>
					))}
				</ListGroup>

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

export default NotificationsPage;
