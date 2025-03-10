"use client"

// pages/add-task.tsx
import React, { useState } from "react";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
import {
	FiHome,
	FiCalendar,
	FiUser,
	FiCheckCircle,
	FiArrowLeft,
} from "react-icons/fi";

const AddTaskPage = () => {
	// State for the new task
	const [task, setTask] = useState({
		title: "",
		startDate: "",
		endDate: "",
		category: "Priority Task",
		description: "",
		toDoList: [""] as string[], // Array for to-do list items
	});

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setTask((prev) => ({ ...prev, [name]: value }));
	};

	const handleToDoChange = (index: number, value: string) => {
		const newToDoList = [...task.toDoList];
		newToDoList[index] = value;
		setTask((prev) => ({ ...prev, toDoList: newToDoList }));
	};

	const addToDoItem = () => {
		setTask((prev) => ({ ...prev, toDoList: [...prev.toDoList, ""] }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add your create task logic here (e.g., API call)
		console.log("New task created with:", task);
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-white">Add Task</h1>
					<Button color="light" size="sm" pill>
						<FiCheckCircle />
					</Button>
				</div>

				{/* Task Form */}
				<form onSubmit={handleSubmit} className="space-y-4">
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
							placeholder="e.g., Feb 21, 2022"
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
							placeholder="e.g., Mar 3, 2022"
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
							placeholder="e.g., UI Mobile Development"
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
							placeholder="Describe the task..."
							required
						/>
					</div>

					{/* To-Do List */}
					<div>
						<Label value="To do list" className="block mb-1" />
						{task.toDoList.map((item, index) => (
							<div key={index} className="flex items-center gap-2 mb-2">
								<TextInput
									type="text"
									value={item}
									onChange={(e) => handleToDoChange(index, e.target.value)}
									placeholder={`To-do item ${index + 1}`}
									className="flex-1"
								/>
							</div>
						))}
						<Button
							type="button"
							color="light"
							size="sm"
							onClick={addToDoItem}
							className="mt-2"
						>
							Add Another Item
						</Button>
					</div>

					{/* Submit Button */}
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700"
					>
						Add Task
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

export default AddTaskPage;
