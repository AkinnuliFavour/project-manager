// pages/index.tsx
import React from "react";
import { Button, Progress } from "flowbite-react";
import { FiHome, FiCalendar, FiUser } from "react-icons/fi";

const HomePage = () => {
	// Sample data for tasks (you can fetch this from an API or state management)
	const priorityTasks = [
		{
			id: 1,
			title: "UI Design",
			daysLeft: "21 days",
			progress: 50,
			color: "blue",
		},
		{
			id: 2,
			title: "Laravel Task",
			daysLeft: "27 days",
			progress: 30,
			color: "purple",
		},
		{
			id: 3,
			title: "Edit Pic",
			daysLeft: "15 days",
			progress: 70,
			color: "red",
		},
	];

	const dailyTasks = [
		"Work Out",
		"Daily Meeting",
		"Reading a Book",
		"Daily Meeting",
	];

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-blue-600">Welcome Phillip</h1>
					<p className="text-gray-500">Have a nice day!</p>
				</div>

				{/* Priority Tasks Section */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						My Priority Tasks
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{priorityTasks.map((task) => (
							<div
								key={task.id}
								className={`p-4 rounded-lg shadow-md bg-${task.color}-100`}
							>
								<h3 className="text-lg font-medium text-gray-800">
									{task.title}
								</h3>
								<p className="text-sm text-gray-500">{task.daysLeft}</p>
								<Progress
									progress={task.progress}
									color={
										task.color === "blue"
											? "blue"
											: task.color === "purple"
											? "purple"
											: "red"
									}
									className="mt-2"
								/>
							</div>
						))}
					</div>
				</div>

				{/* Daily Tasks Section */}
				<div>
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						Daily Task
					</h2>
					<div className="space-y-4">
						{dailyTasks.map((task, index) => (
							<div key={index} className="flex items-center gap-2">
								<input
									type="checkbox"
									id={`task-${index}`}
									className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label htmlFor={`task-${index}`} className="text-gray-700">
									{task}
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

export default HomePage;
