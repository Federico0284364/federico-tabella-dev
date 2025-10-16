import { ReactNode } from "react";

export type Experience = {
	name?: string;
	description:  {
		main: string,
		secondary?: string,
		list?: string[]
	}
	date: string;
	technologyNames: string[];
};

export const experiences = [
	{
		date: new Date("August 2025").toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		}),
		name: "Upwork - Ideo Innovation agency",
		description: 
			{
				main:"I worked for Ideo Innovation on Upwork, implementing frontend features to an existing codebase using React, collaborating with a backend developer for setting up client-server interactions.",
				secondary: "My job was to:",
				list: ['Manage client-side authentication using Google OAuth', 'Create ad admin panel to view and filter users on a table based on their data', 'Connect admin functions and auth to the server via API calls']
			},
		technologyNames: ["React", "Material UI", "Docker"],
	},
];
