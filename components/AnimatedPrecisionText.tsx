"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	text: string;
	textClass: string
}

export default function AnimatedPrecisionText({ text, textClass }: Props) {


	return (
		<div style={{ letterSpacing: 0 }} className={"flex"}>
			{text.split("").map((char, index) => {
				const specialClass = index === 0 ? 'rounded-l-lg pl-2' : index === text.length - 1 ? 'rounded-r-lg pr-2' : ''
				return (
					<motion.span
						className={twMerge("bg-primary py-2", specialClass, textClass)}
						key={char + "-" + index}
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						
						transition={{
							type: "spring",
							damping: 12,
							stiffness: 100,
							delay: index * 0.1,
							duration: 0.08,
						}}
						
					>
						{char === " " ? "\u00A0" : char}
					</motion.span>
				);
			})}
		</div>
	);
}
