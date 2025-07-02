import React, { forwardRef, ReactNode, JSX } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
  icon?: JSX.Element;
  title?: string;
};

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className, icon, title }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge("rounded-2xl bg-medium p-4", className)}
      >
        <div className="w-[40%] max-w-12 aspect-square">{icon}</div>
        <h2 className="text-lg">{title}</h2>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
