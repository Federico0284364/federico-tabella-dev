import Image from "next/image";
import Section from "@/components/Section";
import HeroSection from "@/components/Hero";
import Project from "@/components/Project";
import { projects } from "../models/project";
import Anchor from "@/components/Anchor";
import Contact from "@/components/Contact";
import { icons } from "../data/icons";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Section title="Projects">
				<ul className="flex flex-col gap-8">
					{projects.map((project) => {
						return (
							<li key={project.name}>
								<Project project={project} />
							</li>
						);
					})}
				</ul>
			</Section>
			<Section title="Contact me">
				<ul>
					<li>
						<Contact
							className="text-xl text-fg-muted h-8"
							icon={icons.mail}
							href="mailto:tabella.federico@gmail.com"
						>
							tabella.federico@gmail.com
						</Contact>
					</li>
				</ul>
			</Section>
		</>
	);
}
