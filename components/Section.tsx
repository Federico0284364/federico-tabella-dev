import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
	className?: string;
	title?: string;
	children: ReactNode;
};

export default function Section({ className, title, children, ...props }: Props) {
	return (
		<section className={twMerge("w-full mb-16", className)} {...props}>
			<h2 className="text-3xl">{title}</h2>
			{title ? <hr className="mt-4 mb-12"/> : null}
			{children}
		</section>
	);
}
