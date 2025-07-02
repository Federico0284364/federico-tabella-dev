"use client";

import Section from "./Section";
import Button from "./Button";
import Card from "./Card";
import { motion } from "framer-motion";
import { skillIcons } from "@/data/skill-icons";
import { useRef, useEffect } from "react";

const MotionCard = motion(Card);

export default function SkillsSection() {
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (carouselRef.current) {
			// HTMLCollection --> convert to array
			Array.from(carouselRef.current.children).forEach(
				(child, index) => {}
			);
		}
	}, []);

	const cardClass = "flex flex-col justify-between gap-2 items-start";
	const h2Class = "";

	return (
		<Section title="My skills">
			<motion.div
				ref={carouselRef}
				layout
				transition={{ duration: 2 }}
				className=" text-fg grid grid-cols-1 sm:grid-cols-3 gap-4"
			>
				<Card
					icon={skillIcons.phone}
					className={cardClass}
					title="Fully responsive websites with attention to all devices"
				>
					<Button variant="primary">See</Button>
				</Card>

				<MotionCard
					animate={{ x: "-20vw", scale: 1.1 }}
					icon={skillIcons.code}
					className={cardClass}
					title="Clean, modular and reusable code"
				>
					<Button variant="primary">See</Button>
				</MotionCard>

				<MotionCard
					animate={{ x: "-40vw", scale: 1.2 }}
					
					icon={skillIcons.stars}
					className={cardClass}
					title="Interactive UI realized with smooth and beautiful
						animations"
				>
					<Button variant="primary">See</Button>
				</MotionCard>
			</motion.div>
		</Section>
	);
}
