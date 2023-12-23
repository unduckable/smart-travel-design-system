import tailwindConfig from "@/tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string): number =>
  +fullConfig.theme.screens[value].slice(0, fullConfig.theme.screens[value].indexOf("px"));

type Breakpoints = "" | "lg";

export const getCurrentBreakpoint = () => {
  let currentBreakpoint: Breakpoints = "";
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint as Breakpoints;
    }
  }
  return currentBreakpoint;
};
