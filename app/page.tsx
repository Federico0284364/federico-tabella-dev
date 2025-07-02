import Image from "next/image";
import Section from "@/components/Section";
import HeroSection from "@/components/Hero";
import Project from "@/components/Project";
import { projects } from "../models/project";
import Anchor from "@/components/Anchor";
import Contact from "@/components/Contact";
import { contactIcons } from "../data/contact-icons";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
	return (
		<>
			<HeroSection />

			<SkillsSection />

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
							icon={contactIcons.mail}
							href="mailto:tabella.federico@gmail.com"
						>
							tabella.federico@gmail.com
						</Contact>
					</li>
				</ul>
			</Section>

			<footer className="flex justify-between text-fg-muted items-center h-15">
				<p>©{new Date().getFullYear()} Federico Tabella</p>
				<div className="flex gap-2 h-8">
					<Anchor
						target="_blank"
						href="mailto:tabella.federico@gmail.com"
					>
						{contactIcons.mail}
					</Anchor>

					<Anchor
						target="_blank"
						href="https://www.linkedin.com/in/federico-tabella-2a12b9253/"
					>
						{contactIcons.linkedin}
					</Anchor>

					<Anchor
						target="_blank"
						href="https://github.com/Federico0284364"
					>
						{contactIcons.github}
					</Anchor>
				</div>
			</footer>
		</>
	);
}
