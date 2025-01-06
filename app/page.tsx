import { Nav, Search, ProjectCard, CompletedProjectSlider } from "./components";

const Home = () => {
	const projects = [
		{
			id: 1,
			dueDate: new Date(),
			progress: 100,
			title: "Easy Work",
		},
		{
			id: 2,
			dueDate: new Date(),
			progress: 70,
			title: "Movie-info",
		},
		{
			id: 3,
			dueDate: new Date(),
			progress: 50,
			title: "Notely",
		},
		{
			id: 4,
			dueDate: new Date(),
			progress: 30,
			title: "Joebay",
		},
	];
	return (
		<main className="max-w-screen min-h-screen bg-blue-50">
			<Nav />
			<Search />
			<div className="w-full px-8 mt-8">
				<p className="mb-2 text-gray-700">Completed Tasks</p>
				<CompletedProjectSlider />
			</div>
			<div className="w-full px-8 mt-8">
				<p className="mb-2 text-gray-700">In Progress</p>
				<CompletedProjectSlider />
			</div>
		</main>
	);
};

export default Home;
