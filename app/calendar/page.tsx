"use client"

// pages/calendar.tsx
import React, { useState } from "react";
import { Button, Card, ListGroup, Progress } from "flowbite-react";
import { FiHome, FiCalendar, FiUser, FiPlus } from "react-icons/fi";

const CalendarPage = () => {
	// Sample data for tasks and calendar
	const [selectedDate, setSelectedDate] = useState("Feb 21, 2022");
	const [view, setView] = useState<"calendar" | "tasks">("calendar");

	const calendarDays = [
		{ date: "19", isCurrent: false },
		{ date: "20", isCurrent: false },
		{ date: "21", isCurrent: true },
		{ date: "22", isCurrent: false },
		{ date: "23", isCurrent: false },
	];

	const priorityTasks = [
		{
			title: "UI Design",
			description:
				"Design a user interface (UI) is the process designers use to build interfaces in software or computerized devices, in which users find and use specific features. Task added Feb 21.",
			progress: 50,
		},
		{
			title: "Laravel Task",
			description:
				"Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Task added Feb 22.",
			progress: 30,
		},
		{
			title: "Edit Picture",
			description:
				"Editing pictures is the process of altering images to improve their quality, remove unwanted elements, and enhance visual appeal. Task added Feb 23.",
			progress: 70,
		},
	];

	const dailyTasks = [
		"Work Out",
		"Daily Meeting",
		"Reading Book",
		"Learn Coding",
		"Sleep Soon",
	];

	const handleDateClick = (date: string) => {
		setSelectedDate(date);
		setView("tasks"); // Switch to tasks view when a date is clicked
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-blue-600">{selectedDate}</h1>
					<Button color="light" size="sm">
						<FiPlus />
					</Button>
				</div>

				{/* Calendar and Tasks Toggle */}
				<div className="mb-6 flex gap-4">
					<Button
						color={view === "calendar" ? "blue" : "light"}
						onClick={() => setView("calendar")}
						className="flex-1"
					>
						Calendar
					</Button>
					<Button
						color={view === "tasks" ? "blue" : "light"}
						onClick={() => setView("tasks")}
						className="flex-1"
					>
						Tasks
					</Button>
				</div>

				{/* Content Based on View */}
				{view === "calendar" ? (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Calendar View (Left Side) */}
						<div>
							<h2 className="text-xl font-semibold text-gray-800 mb-4">
								Calendar
							</h2>
							<div className="grid grid-cols-5 gap-2">
								{calendarDays.map((day, index) => (
									<Button
										key={index}
										color={day.isCurrent ? "blue" : "light"}
										size="sm"
										onClick={() => handleDateClick(`Feb ${day.date}, 2022`)}
										className={`w-full ${
											day.isCurrent ? "text-white" : "text-gray-700"
										}`}
									>
										{day.date}
									</Button>
								))}
							</div>
						</div>

						{/* Task Categories (Right Side) */}
						<div>
							<h2 className="text-xl font-semibold text-gray-800 mb-4">
								Tasks
							</h2>
							<div className="space-y-4">
								<h3 className="text-lg font-medium text-blue-600">
									Priority Task
								</h3>
								<ListGroup>
									{priorityTasks.map((task, index) => (
										<ListGroup.Item key={index} className="p-2">
											<p className="text-gray-700">{task.title}</p>
											<p className="text-sm text-gray-500">
												{task.description.slice(0, 50)}...
											</p>
											<Progress
												progress={task.progress}
												color="blue"
												size="sm"
												className="mt-1"
											/>
										</ListGroup.Item>
									))}
								</ListGroup>

								<h3 className="text-lg font-medium text-blue-600 mt-4">
									Daily Task
								</h3>
								<ListGroup>
									{dailyTasks.map((task, index) => (
										<ListGroup.Item key={index} className="p-2">
											<p className="text-gray-700">{task}</p>
										</ListGroup.Item>
									))}
								</ListGroup>
							</div>
						</div>
					</div>
				) : (
					// Tasks View (Detailed Daily Tasks)
					<div>
						<h2 className="text-xl font-semibold text-gray-800 mb-4">
							Daily Tasks for {selectedDate}
						</h2>
						<ListGroup>
							{dailyTasks.map((task, index) => (
								<ListGroup.Item key={index} className="p-2">
									<div className="flex items-center gap-2">
										<input
											type="checkbox"
											id={`daily-task-${index}`}
											className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
										/>
										<label
											htmlFor={`daily-task-${index}`}
											className="text-gray-700 flex-1"
										>
											{task}
										</label>
									</div>
								</ListGroup.Item>
							))}
						</ListGroup>
					</div>
				)}

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

export default CalendarPage;
