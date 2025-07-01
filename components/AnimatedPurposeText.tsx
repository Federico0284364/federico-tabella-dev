"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	text: string;
	textClass: string
}

export default function AnimatedPurposeText({ text, textClass }: Props) {
	const duration = 0.8;

	return (
		<motion.div animate={{border: 'none'}} transition={{duration: 0, delay: duration}} className="border-dashed border border-border rounded-lg inline-block">
			<motion.p
      className={twMerge("rounded-lg bg-primary px-2 py-2 pointer-events-auto", textClass)}
				initial={{ x: 100, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: duration }}
			>
				{text}
			</motion.p>
		</motion.div>
	);
}
