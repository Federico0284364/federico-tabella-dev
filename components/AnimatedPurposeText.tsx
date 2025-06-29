"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function AnimatedPurposeText({ text }: { text: string }) {
	return (
		<motion.div animate={{border: 'none'}} transition={{duration: 0, delay: 1}} className="border-dashed border border-border rounded-lg inline-block">
			<motion.p
      className="rounded-lg bg-primary px-2 py-2 pointer-events-auto"
				initial={{ x: 100, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
			>
				{text}
			</motion.p>
		</motion.div>
	);
}
