import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 z-[999]">
      <button
        onClick={(e) => scrollToTop(e)}
        className={cn(
          "inline-flex items-center rounded-full bg-yellow p-3 text-primary-light text-opacity-100 shadow-sm transition-opacity focus:outline-none active:animate-ping",
          className,
          isVisible ? "opacity-60" : "opacity-0",
        )}
      >
        <ArrowUp className="h-6 w-6 opacity-100" aria-hidden="true" />
      </button>
    </div>
  );
};
