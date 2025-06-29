import { Technology } from "./technology";
import { technologies } from "./technology";

export type Project = {
	name: string;
	descriptionEn: string;
	descriptionIt: string;
	imageSrc: string;
	date: string;
	link: string;
	technologyNames: string[];
};

export function getTechnologyByName(name: string): Technology {
	const selectedTechnology = technologies.find(
		(technology) => technology.name === name
	);
	return selectedTechnology!;
}

export const projects: Project[] = [
  {
		name: "Money Tracker",
		descriptionEn:
			"Full-stack app with authentication and database to manage and analyze your expenses, dividing them through different categories.",
		descriptionIt:
			"App con autenticazione e database per gestire ed analizzare le spese, divise per categoria.",
		imageSrc: "",
		date: new Date('July 2025').toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		}),
		link: '',
		technologyNames: ["NextJS", "Firebase", "Tailwind" ],
	},
	
  {
		name: "Mood tracker",
		descriptionEn:
			"Daily tracker of mood, sleep and thoughts.\nInspired by a challenge from Frontend Mentor.",
		descriptionIt:
			"Tracker giornaliero di correlazione tra umore, sonno e pensieri.\nIspiritato da challenge di Frontend Mentor.",
		imageSrc: "/mood-tracker.png",
		date: new Date('May 2025').toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		}),
		link: "https://federico0284364.github.io/mood-tracker/",
		technologyNames: ["React", "Tailwind", "Redux"],
	},
  {
		name: "Guess the Pokémon",
		descriptionEn:
			"Test your Pokémon knowledge in a fun quiz game with two difficulty modes.\nPowered by data from PokéAPI.",
		descriptionIt:
			"Un gioco a quiz di conoscenza sui Pokémon con due diverse difficoltà.\nDati forniti da PokéAPI.",
		imageSrc: "/guess-the-pokemon.png",
		date: new Date('March 2025').toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		}),
		link: "https://federico0284364.github.io/guess-the-pokemon/",
		technologyNames: ["React", "Tailwind", "Redux", "REST API", 'Framer Motion'],
	},
];
