import { BREAKPOINTS } from "../constants";

export const getBreakpointValue = (value: string): number =>
  BREAKPOINTS[value].slice(0, BREAKPOINTS[value].indexOf("px"));

type Breakpoints = "" | "lg";

export const getCurrentBreakpoint = () => {
  let currentBreakpoint: Breakpoints = "";
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(BREAKPOINTS)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint as Breakpoints;
    }
  }
  return currentBreakpoint;
};
