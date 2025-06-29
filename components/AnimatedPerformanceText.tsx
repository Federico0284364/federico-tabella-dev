import { motion } from "framer-motion";

export default function AnimatedPerformanceText({ text }: { text: string }) {
	return (
		<>
			<motion.p className="bg-primary py-2 px-2 rounded-lg inline-block" initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1}}>{text}</motion.p>
		</>
	);
}
