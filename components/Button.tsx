'use client'
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
	className?: string;
	variant?: 'primary' | 'secondary' | 'danger' | 'important';
	size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function Button({
	children,
	variant = "secondary",
	size = "md",
	className,
	...props
}: Props) {

  const standardClass = 'rounded'

	const variantClass = {
    primary: 'bg-primary text-fg',
    secondary: 'bg-secondary text-fg',
    danger: 'bg-red-500 text-white',
		important: 'bg-important text-fg',
  }[variant];

  const sizeClass = {
    sm: 'text-sm px-1 py-0',
    md: 'text-md px-2 py-1',
    lg: 'text-xl px-4 py-2',
    xl: 'text-2xl px-6 py-3 font-semibold',
  }[size];

	return (
		<button className={twMerge(standardClass, variantClass, sizeClass, className)} {...props}>
			{children}
		</button>
	);
}
