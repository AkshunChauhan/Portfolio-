"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import "../../app/globals.css";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        (
          cursorRef.current as HTMLDivElement
        ).style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 sm:py-6 bg-blue bg-opacity-80 backdrop-blur-md",
        className
      )}
    >
      {/* Main container with responsive layout */}
      <div className="max-w-7xl mx-auto">
        {/* Stack everything vertically on mobile, normal layout on desktop */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Portfolio heading - centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start">
            <h1
              style={{ fontFamily: "'Dancing Script', serif" }}
              className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Portfolio
            </h1>
          </div>
  
          {/* Navigation items - centered and compact on mobile */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="nav-link text-white hover:text-blue-400 transition-colors px-2 py-1 sm:px-3 sm:py-2"
              >
                <span className="text-sm sm:text-base font-medium">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>
  
          {/* Contact button - centered on mobile, right on desktop */}
          <div className="flex justify-center md:justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="contact-btn text-white hover:text-blue-400 transition-colors text-sm sm:text-base"
            >
              <a
                href="mailto:your@email.com"
                className="flex items-center justify-center gap-2"
              >
                <span className="font-medium">Contact me</span>
                <i className="fa-regular fa-envelope"></i>
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};  