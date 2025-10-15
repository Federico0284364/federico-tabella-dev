"use client";

import Section from "./Section";
import Button from "./Button";
import Card from "./Card";
import { skillIcons } from "@/data/skill-icons";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (carouselRef.current) {
			// eventuale logica futura
		}
	}, []);

	const cardClass = "flex flex-col justify-between gap-2 items-start";

	return (
		<Section title="My skills">
			<motion.div
				layout
				ref={carouselRef}
				className="text-fg grid grid-cols-1 sm:grid-cols-3 gap-4"
			>
				
				<Card
					icon={skillIcons.phone}
					className={cardClass}
					title="Fully responsive websites with attention to all devices"
				>
					<Button variant="primary">See</Button>
				</Card>

				<Card
					icon={skillIcons.code}
					className={cardClass}
					title="Clean, modular and reusable code"
				>
					<Button variant="primary">See</Button>
				</Card>

				<Card
					icon={skillIcons.stars}
					className={cardClass}
					title="Interactive UI realized with smooth and beautiful animations"
				>
					<Button variant="primary">See</Button>
				</Card>
			</motion.div>
		</Section>
	);
}
