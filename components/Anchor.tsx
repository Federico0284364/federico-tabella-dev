import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  href: string;
  children: ReactNode;
} 

export default function Anchor({className, href, children, ...props}: Props){
  return <a {...props} href={href} className={twMerge('hover:underline h-full', className)}>{children}</a>
}