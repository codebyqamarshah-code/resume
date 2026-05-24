"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-6 md:right-10 z-[999]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-white dark:bg-lightdarkblue text-primary shadow-2xl border border-black/5 dark:border-white/10 transition-all duration-300 hover:-translate-y-2 active:scale-95 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="group-hover:-translate-y-1 transition-transform"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      )}
    </div>
  );
}
