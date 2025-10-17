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
import { experiences } from "@/models/experience";
import Experience from "@/components/Experience";
import FadeOnScroll from "@/components/FadeOnScroll";

export default function Home() {
	return (
		<>
			<FadeOnScroll />

			<HeroSection />

			<SkillsSection />

			<Section title="Experience">
				<ul className="flex flex-col gap-8">
					{experiences.map((experience, index) => {
						return (
							<li key={"experience" + index}>
								<Experience experience={experience} />
							</li>
						);
					})}
				</ul>
			</Section>

			<Section id="projects" title="Projects" className="scroll-mt-12">
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

			<Section
				id="contacts"
				title="Contact me"
				className="mb-2 scroll-mt-12"
			>
				<div className="flex flex-col sm:flex-row sm:justify-between gap-2">
					<Contact
						className="text-xl text-fg-muted h-8"
						icon={contactIcons.mail}
						href="mailto:tabella.federico@gmail.com"
					>
						federico.tabella.dev@gmail.com
					</Contact>
					<div className="flex gap-2 h-8">
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
				</div>
			</Section>

			<footer className="flex justify-between text-fg-muted items-center">
				<p>©{new Date().getFullYear()} Federico Tabella</p>
			</footer>
		</>
	);
}
