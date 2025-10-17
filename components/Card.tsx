import React, { forwardRef, ReactNode, JSX, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { motion, MotionProps } from "framer-motion";

type Props = MotionProps & HTMLAttributes<HTMLDivElement> & {
	children?: ReactNode;
	className?: string;
	icon?: JSX.Element;
	title?: string;
};

const Card = forwardRef<HTMLDivElement, Props>(
	({ children, className, icon, title }, ref) => {
		return (
			<motion.div
				ref={ref}
				className={twMerge(
					"rounded-2xl bg-medium p-4 shadow-lg transition hover:scale-104 hover:shadow-amber-300/70",
					className
				)}
			>
				<div className="w-[40%] max-w-12 aspect-square">{icon}</div>
				<h2 className="text-lg">{title}</h2>
				{children}
			</motion.div>
		);
	}
);

Card.displayName = "Card";

export default Card;
