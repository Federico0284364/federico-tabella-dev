"use client";
import Image from "next/image";
import { getTechnologyByName, Project } from "@/models/project";
import TechnologyTag from "./Technology";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import Card from "./Card";

type Props = {
	project: Project;
};

export default function ProjectContainer({ project }: Props) {
	return (
		
			<motion.a
			initial={{ opacity: 0, transform: "translateY(20px)" }}
			whileInView={{ opacity: 1, transform: "translateY(0)" }}
			transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			className="backdrop-blur-lg bg-light/50 border-fg/20 hover:bg-light transition p-4 md:p-6 rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-x-8"
		>
			<Image
				className="rounded-xl aspect[16/9]"
				alt={`${project.name} project image`}
				width={1600}
				height={900}
				quality={100}
				src={project.imageSrc}
			/>
			<div>
				<p className="text-fg-muted text-md mt-6 md:mt-0">
					{project.date}
				</p>
				<h2 className="text-fg text-2xl font-semibold mt-2">
					{project.name}
				</h2>
				<p className="text-fg text-md mt-1">{project.descriptionEn}</p>
				<ul className="flex flex-wrap gap-2 mt-4">
					{project.technologyNames.map((techName) => {
						const technology = getTechnologyByName(techName);
						return (
							<li key={techName + project.name}>
								<TechnologyTag technology={technology} />
							</li>
						);
					})}
				</ul>
			</div>
		</motion.a>
		
		
	);
}
