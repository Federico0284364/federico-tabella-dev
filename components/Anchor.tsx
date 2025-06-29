import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  href: string;
  children: ReactNode;
}

export default function Anchor({className, href, children}: Props){
  return <a href={href} className={twMerge('hover:underline', className)}>{children}</a>
}