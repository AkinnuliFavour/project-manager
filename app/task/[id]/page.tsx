"use client"

// pages/task/[id].tsx
import React from "react";
import { Button, Progress } from "flowbite-react";
import { FiHome, FiCalendar, FiUser, FiCheckCircle } from "react-icons/fi";

const TaskDetailPage = () => {
	// Sample data for the task (you can fetch this from an API or params)
	const task = {
		title: "UI Design",
		startDate: "21 Feb 2022",
		endDate: "18 Feb 2023",
		months: 0,
		days: 12,
		hours: 18,
		description:
			"Design a user interface (UI) for a digital product or service. This user interface may include everything from screens and touchscreens, keyboards, sounds, and more. It’s helpful to learn a bit more about its history and how it has evolved into best practices and a profession.",
		progress: 80,
		toDoList: [
			"Make a moodboard",
			"Make a wireframe design",
			"Make a component design",
			"Client Meeting",
		],
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-blue-600">{task.title}</h1>
					<Button color="light" size="sm" pill>
						<FiCheckCircle />
					</Button>
				</div>

				{/* Timeline Section */}
				<div className="mb-6">
					<div className="flex justify-between text-sm text-gray-500 mb-2">
						<span>start</span>
						<span>{task.startDate}</span>
						<span>end</span>
						<span>{task.endDate}</span>
					</div>
					<div className="flex justify-between text-blue-600 font-medium">
						<span>{task.months} months</span>
						<span>{task.days} days</span>
						<span>{task.hours} hours</span>
					</div>
				</div>

				{/* Description Section */}
				<div className="mb-6">
					<h2 className="text-lg font-semibold text-gray-800 mb-2">
						Description
					</h2>
					<p className="text-gray-700">{task.description}</p>
				</div>

				{/* Progress Section */}
				<div className="mb-6">
					<h2 className="text-lg font-semibold text-gray-800 mb-2">Progress</h2>
					<Progress progress={task.progress} color="blue" className="mt-2" />
				</div>

				{/* To-Do List Section */}
				<div>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">
						To do list
					</h2>
					<div className="space-y-4">
						{task.toDoList.map((item, index) => (
							<div key={index} className="flex items-center gap-2">
								<input
									type="checkbox"
									id={`todo-${index}`}
									className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label htmlFor={`todo-${index}`} className="text-gray-700">
									{item}
								</label>
							</div>
						))}
					</div>
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

export default TaskDetailPage;
