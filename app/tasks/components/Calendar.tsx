"use client"

import { useState } from "react";

export const Calendar = () => {
	const [selectedDate, setSelectedDate] = useState<number>(21); // Highlighted date
	const daysInMonth = Array.from({ length: 28 }, (_, i) => i + 1); // Simplified for Feb 2022

	return (
		<div className="p-4">
			<h2 className="text-lg font-semibold text-gray-800">Feb, 2022</h2>
			<div className="grid grid-cols-7 gap-2 mt-2">
				{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
					<div key={index} className="text-center text-gray-500 font-medium">
						{day}
					</div>
				))}
				{daysInMonth.map((day) => (
					<div
						key={day}
						className={`text-center p-2 rounded-full cursor-pointer ${
							day === selectedDate
								? "bg-blue-600 text-white"
								: "text-gray-800 hover:bg-gray-100"
						}`}
						onClick={() => setSelectedDate(day)}
					>
						{day}
					</div>
				))}
			</div>
		</div>
	);
};
