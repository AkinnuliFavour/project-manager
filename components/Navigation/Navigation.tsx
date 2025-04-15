import { Button } from "flowbite-react";
import { FiHome, FiCalendar, FiUser } from "react-icons/fi";
import Link from "next/link";

export const Navigation = () => {
	return (
		<div className="mt-8  flex justify-around border-t pt-4">
			<Button color="light" size="sm">
				<Link href="/">
					<FiHome />
				</Link>
			</Button>
			<Button color="light" size="sm">
				<Link href="/tasks">
					<FiCalendar />
				</Link>
			</Button>
			<Button color="light" size="sm">
				<Link href="/profile-overview">
					<FiUser />
				</Link>
			</Button>
		</div>
	);
};
