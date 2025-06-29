'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  children: ReactNode;
}

export default function NavLink({href, children}: Props) {
  const path = usePathname();
  const standardClass = ''
  const activeClass = 'underline'

  return (
    <Link
      href={href}
      className={path === (href) ? twMerge(standardClass, activeClass) : standardClass }
    >
      {children}
    </Link>
  );
}
