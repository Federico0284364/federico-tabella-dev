"use client";
import { useEffect, useState } from "react";

export default function FadeOnScroll() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 900);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none bg-gradient-to-t from-dark to-transparent transition-opacity duration-200"
      style={{ opacity }}
    />
  );
}
