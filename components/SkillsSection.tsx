"use client";

import Section from "./Section";
import Button from "./Button";
import Card from "./Card";
import { skillIcons } from "@/data/skill-icons";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
	const cardClass = "flex flex-col justify-between gap-2 items-start";

	return (
		<Section title="My skills">
			<motion.div
				layout
				className="text-fg grid grid-cols-1 sm:grid-cols-3 gap-4"
			>
				
				<Card
				key={'Mobile skill'}
				layout
					icon={skillIcons.phone}
					className={cardClass}
					title="Fully responsive websites with attention to all devices"
				>
					
				</Card>

				<Card
				key={'Code skill'}
				layout
					icon={skillIcons.code}
					className={cardClass}
					title="Clean, modular and reusable code, powered by modern frameworks"
				>
					
				</Card>

				<Card
				key={'UI skill'}
				layout
					icon={skillIcons.stars}
					className={cardClass}
					title="Interactive UI realized with smooth and beautiful animations"
				>
					
				</Card>
			</motion.div>
		</Section>
	);
}
