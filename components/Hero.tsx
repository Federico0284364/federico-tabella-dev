"use client";
import Section from "./Section";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPurposeText from "./AnimatedPurposeText";
import AnimatedPrecisionText from "./AnimatedPrecisionText";
import AnimatedPerformanceText from "./AnimatedPerformanceText";
import { setDelay as delay } from "@/utils/functions";
import { twMerge } from "tailwind-merge";

const dynamicTextClass =
	"text-xl sm:text-2xl lg:text-4xl bg-gradient-to-b to-primary/70 from-dark/0 text-shadow";
const dynamicContentText = ["Performance", "Precision", "Purpose", "extra"];
const dynamicContent = [
	<AnimatedPerformanceText text="Performance" textClass={dynamicTextClass} />,
	<AnimatedPurposeText text="Purpose" textClass={dynamicTextClass} />,
	<AnimatedPrecisionText text="Precision" textClass={dynamicTextClass} />,
	<motion.p
		className="inline-block text-sm lg:text-lg p-0.5 rounded bottom-0 sm:bottom-5 relative"
		initial={{ y: 200, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
	>
		<span className="absolute inset-0 bg-amber-500/50 blur-xl rounded-full opacity-20" />
		<span className="whitespace-nowrap">...and a lot of passion!</span>
	</motion.p>,
];
const dynamicContentIta = ["Prestazioni", "Precisione", "Intenzione"];

export default function HeroSection() {
	const [contentNumber, setContentNumber] = useState<number>(-1);
	const intervalRef = useRef<null | number>(null);

	useEffect(() => {
		sequence();

		return () => {
			if (intervalRef.current !== null) {
				console.log(
					"Cleanup called, interval id:",
					intervalRef.current
				);
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	async function sequence() {
		await delay(200);

		intervalRef.current = window.setInterval(() => {
			console.log("interval");
			setContentNumber((prev) =>
				prev >= dynamicContent.length - 2 ? prev : prev + 1
			);
		}, 600);

		await delay((dynamicContent.length - 1) * 800 + 1500);
		setContentNumber((prev) => prev + 1);
	}

	return (
		<Section className="mt-10 mb-10">
			<div className="flex flex-col flex-wrap gap-x-3 items-center relative">
				<div className="h-80 lg:h-97 rounded-full bg-transparent aspect-square shadow-2xl shadow-amber-300  absolute z-[-10]" />
				<motion.h1
					initial={{ opacity: 0, transform: "translateY(20px)" }}
					animate={{ opacity: 1, transform: "translateY(0)" }}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					className="text-5xl sm:text-5xl lg:text-7xl font-semibold py-1 mb-2 sm:mb-6 text-center drop-shadow-xl drop-shadow-amber-700/20"
				>
					Building the web with
				</motion.h1>

				<motion.ul
					key={"Precision"}
					className=" gap-2 sm:gap-4 flex flex-col h-60 font-semibold text-3xl lg:text-5xl font py-1 rounded-lg items-center overflow-visible"
				>
					{dynamicContentText
						.filter((text, index) => {
							return index <= contentNumber;
						})
						.map((a, index) => {
							return (
								<li key={dynamicContentText[index]} className="drop-shadow-2xl drop-shadow-amber-500/1">
									{dynamicContent[index]}
								</li>
							);
						})}
				</motion.ul>
			</div>
		</Section>
	);
}
