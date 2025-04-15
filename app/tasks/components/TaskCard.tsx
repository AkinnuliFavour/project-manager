import { Card } from "flowbite-react";

interface TaskCardProps {
	title: string;
	description: string;
	category: string;
	date?: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({
	title,
	description,
	category,
	date,
}) => {
	return (
		<Card className="mb-4">
			<h3 className="text-lg font-semibold text-gray-800">{title}</h3>
			<p className="text-sm text-gray-600">{description}</p>
			<div className="flex justify-between items-center mt-2">
				<span className="text-xs text-blue-600 font-medium">{category}</span>
				{date && <span className="text-xs text-gray-500">{date}</span>}
			</div>
		</Card>
	);
};
