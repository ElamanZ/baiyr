import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
type Direction = "up" | "down";

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useBreakpoint(
  size: Breakpoint,
  direction: Direction = "up"
): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const width = breakpoints[size];
    const query =
      direction === "up"
        ? `(min-width: ${width}px)`
        : `(max-width: ${width - 0.02}px)`;

    const mediaQuery = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [size, direction]);

  return matches;
}
