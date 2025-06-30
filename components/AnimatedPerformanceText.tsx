import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
	text: string;
	textClass: string
}
export default function AnimatedPerformanceText({ text, textClass }: Props) {
	return (
		<>
			<motion.p className={twMerge("bg-primary py-2 px-2 rounded-lg inline-block", textClass)} initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1}}>{text}</motion.p>
		</>
	);
}
