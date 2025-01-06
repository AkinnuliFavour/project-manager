import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HiLogout } from "react-icons/hi";
import { UserAvatar } from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Easy/UserAvatar",
	component: UserAvatar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		initials: "AF",
	},
};
