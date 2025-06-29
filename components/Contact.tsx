import Image from "next/image";
import { ReactNode } from "react";
import Anchor from "./Anchor";
import { twMerge } from "tailwind-merge";

type Props = {
	href: string;
	icon: ReactNode;
	children: ReactNode;
	className?: string;
};

export default function Contact({ href, icon, children, className }: Props) {
	return (
		<Anchor
			href={href}
			className={twMerge(
				"hover:underline hover:text-highlight flex items-center gap-2",
				className
			)}
		>
			<>
				{icon}
				{children}
			</>
		</Anchor>
	);
}
