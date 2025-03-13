"use client"

// pages/statistics-detail.tsx
import React, { useState } from "react";
import { Button, Progress } from "flowbite-react";
import {
	FiHome,
	FiCalendar,
	FiUser,
	FiCheckCircle,
	FiArrowLeft,
} from "react-icons/fi";

const StatisticsPage = () => {
	const [year, setYear] = useState(2019);

	const monthlyStats = [
		{ month: "January", totalTasks: 846, completedTasks: 682, progress: 80 },
		{ month: "February", totalTasks: 846, completedTasks: 682, progress: 80 },
		{ month: "March", totalTasks: 846, completedTasks: 682, progress: 80 },
		{ month: "April", totalTasks: 846, completedTasks: 682, progress: 80 },
		{ month: "May", totalTasks: 846, completedTasks: 682, progress: 60 },
		{ month: "June", totalTasks: 846, completedTasks: 682, progress: 80 },
		{ month: "July", totalTasks: 846, completedTasks: 682, progress: 70 },
		{ month: "August", totalTasks: 846, completedTasks: 682, progress: 80 },
	];

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-white">Statistic</h1>
					<Button color="light" size="sm" pill>
						<FiCheckCircle />
					</Button>
				</div>

				{/* Year Navigation */}
				<div className="mb-6 flex justify-center gap-4">
					<Button
						color="light"
						size="sm"
						onClick={() => setYear(year - 1)}
						disabled={year <= 2019}
					>
						<FiArrowLeft className="mr-2" /> Previous
					</Button>
					<span className="text-xl font-semibold text-gray-800">{year}</span>
					<Button color="light" size="sm" onClick={() => setYear(year + 1)}>
						Next <FiArrowLeft className="ml-2 transform rotate-180" />
					</Button>
				</div>

				{/* Statistics Content */}
				<div className="grid grid-cols-2 gap-4 mb-6">
					<div className="p-4 bg-blue-100 rounded-lg text-center">
						<p className="text-lg font-semibold text-gray-800">Total Tasks</p>
						<p className="text-2xl font-bold text-blue-600">846</p>
					</div>
					<div className="p-4 bg-blue-100 rounded-lg text-center">
						<p className="text-lg font-semibold text-gray-800">
							Completed Tasks
						</p>
						<p className="text-2xl font-bold text-blue-600">682</p>
					</div>
				</div>

				{/* Monthly Progress */}
				<div className="space-y-4">
					{monthlyStats.map((stat, index) => (
						<div key={index} className="flex items-center gap-4">
							<span className="text-gray-800">{stat.month}</span>
							<Progress
								progress={stat.progress}
								color="blue"
								size="sm"
								className="flex-1"
							/>
						</div>
					))}
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

export default StatisticsPage;
