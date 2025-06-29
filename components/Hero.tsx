"use client";
import Section from "./Section";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPurposeText from "./AnimatedPurposeText";
import AnimatedPrecisionText from "./AnimatedPrecisionText";
import AnimatedPerformanceText from "./AnimatedPerformanceText";

const dynamicContentText = ["Performance", "Precision", "Purpose", "extra"];
const dynamicContent = [
	<AnimatedPerformanceText text="Performance" />,
	<AnimatedPurposeText text="Purpose" />,
	<AnimatedPrecisionText text="Precision" />,
	<motion.p
		className="text-sm"
		initial={{ y: 200, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
	>
		while having fun
	</motion.p>,
];
const dynamicContentIta = ["Prestazioni", "Precisione", "Intenzione"];

let interval: any;

export default function HeroSection() {
	const [contentNumber, setContentNumber] = useState<number>(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setContentNumber((prev) => prev + 1);
		}, (dynamicContent.length - 1) * 800);

		return () => clearTimeout(timeout);
	});

	useEffect(() => {
		if (contentNumber >= dynamicContent.length - 2) return;

		const interval = setInterval(() => {
			setContentNumber((prev) =>
				prev >= dynamicContent.length - 1 ? prev : prev + 1
			);
		}, 900);

		return () => clearInterval(interval);
	}, [contentNumber]);

	return (
		<Section>
			<div className="flex flex-col flex-wrap gap-x-3 items-center">
				<h1 className="text-5xl lg:text-7xl font-semibold py-1 mb-3 text-center ">
					Building the web with
				</h1>

				<ul
					key={"Precision"}
					className=" h-50 lg:h-60 mt-2 sm:mt-0 font-semibold text-3xl lg:text-5xl font py-1 rounded-lg overflow-visible"
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
