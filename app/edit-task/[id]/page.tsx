"use client"

// pages/edit-task/[id].tsx
import React, { useState } from "react";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
import {
	FiHome,
	FiCalendar,
	FiUser,
	FiCheckCircle,
	FiArrowLeft,
} from "react-icons/fi";

const EditTaskPage = () => {
	// Sample data for the task (you can fetch this from an API or params)
	const [task, setTask] = useState({
		title: "UI Design",
		startDate: "Feb 21, 2022",
		endDate: "Mar 3, 2022",
		category: "Priority Task",
		description:
			"Design a user interface (UI) for a digital product or service. This user interface may include everything from screens and touchscreens, keyboards, sounds, and more. It’s helpful to learn a bit more about its history and how it has evolved into best practices and a profession.",
	});

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setTask((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add your update logic here (e.g., API call)
		console.log("Task updated with:", task);
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-white">Edit Task</h1>
					<Button color="light" size="sm" pill>
						<FiCheckCircle />
					</Button>
				</div>

				{/* Task Form */}
				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Task Icon and Title */}
					<div className="flex items-center gap-4 mb-4">
						<div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
							UI
						</div>
						<h2 className="text-xl font-semibold text-gray-800">
							{task.title}
						</h2>
					</div>

					{/* Start Date */}
					<div>
						<Label htmlFor="startDate" value="Start" className="block mb-1" />
						<TextInput
							id="startDate"
							type="text"
							name="startDate"
							value={task.startDate}
							onChange={handleInputChange}
							icon={FiCalendar}
							required
						/>
					</div>

					{/* End Date */}
					<div>
						<Label htmlFor="endDate" value="Ends" className="block mb-1" />
						<TextInput
							id="endDate"
							type="text"
							name="endDate"
							value={task.endDate}
							onChange={handleInputChange}
							icon={FiCalendar}
							required
						/>
					</div>

					{/* Title */}
					<div>
						<Label htmlFor="title" value="Title" className="block mb-1" />
						<TextInput
							id="title"
							type="text"
							name="title"
							value={task.title}
							onChange={handleInputChange}
							required
						/>
					</div>

					{/* Category */}
					<div>
						<Label htmlFor="category" value="Category" className="block mb-1" />
						<Select
							id="category"
							name="category"
							value={task.category}
							onChange={handleInputChange}
							required
						>
							<option>Priority Task</option>
							<option>Daily Task</option>
							<option>Other</option>
						</Select>
					</div>

					{/* Description */}
					<div>
						<Label
							htmlFor="description"
							value="Description"
							className="block mb-1"
						/>
						<Textarea
							id="description"
							name="description"
							value={task.description}
							onChange={handleInputChange}
							rows={4}
							required
						/>
					</div>

					{/* Submit Button */}
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700"
					>
						Save Changes
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

export default EditTaskPage;
