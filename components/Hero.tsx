"use client";
import Section from "./Section";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPurposeText from "./AnimatedPurposeText";
import AnimatedPrecisionText from "./AnimatedPrecisionText";
import AnimatedPerformanceText from "./AnimatedPerformanceText";
import { setDelay as delay } from "@/utils/functions";
import { twMerge } from "tailwind-merge";

const dynamicTextClass = "text-xl sm:text-3xl lg:text-5xl bg-gradient-to-b from-primary to-dark text-shadow-xl text-shadow-amber-500";
const dynamicContentText = ["Performance", "Precision", "Purpose", "extra"];
const dynamicContent = [
	<AnimatedPerformanceText text="Performance" textClass={dynamicTextClass} />,
	<AnimatedPurposeText text="Purpose" textClass={dynamicTextClass} />,
	<AnimatedPrecisionText text="Precision" textClass={dynamicTextClass} />,
	<motion.p
		className="text-sm lg:text-lg"
		initial={{ y: 200, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
	>
		...while having fun!
	</motion.p>,
];
const dynamicContentIta = ["Prestazioni", "Precisione", "Intenzione"];

export default function HeroSection() {
	const [contentNumber, setContentNumber] = useState<number>(-1);
	let interval: any;

	useEffect(() => {
		sequence();

		return () => clearInterval(interval);
	}, []);

	async function sequence() {
		await delay(200);

		interval = setInterval(() => {
			setContentNumber((prev) =>
				prev >= dynamicContent.length - 2 ? prev : prev + 1
			);
		}, 900);

		await delay((dynamicContent.length - 1) * 800 + 200);
		setContentNumber((prev) => prev + 1);
	}

	return (
		<Section>
			<div className="flex flex-col flex-wrap gap-x-3 items-center relative">
				<div className="h-80 lg:h-97 rounded-full bg-transparent aspect-square shadow-lg shadow-amber-300  absolute z-[-10]"/>
				<motion.h1
					initial={{ opacity: 0, transform: "translateY(20px)" }}
					animate={{ opacity: 1, transform: "translateY(0)"}}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					className="text-5xl lg:text-7xl font-semibold py-1 mb-6 sm:mb-10 text-center drop-shadow-xl drop-shadow-blue-700/50"
				>
					Building the web with
				</motion.h1>

				<ul
					key={"Precision"}
					className=" flex flex-col h-50 lg:h-60 font-semibold text-3xl lg:text-5xl font py-1 rounded-lg items-center overflow-visible"
				>
					{dynamicContentText
						.filter((text, index) => {
							return index <= contentNumber;
						})
						.map((a, index) => {
							return (
								<li className="h-1/3 ">
									{dynamicContent[index]}
								</li>
							);
						})}
				</ul>
				</div>
			
		</Section>
	);
}
