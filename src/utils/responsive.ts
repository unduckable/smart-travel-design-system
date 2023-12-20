import { BREAKPOINTS } from "../constants";

export const getBreakpointValue = (value: string): number =>
  BREAKPOINTS[value].slice(0, BREAKPOINTS[value].indexOf("px"));

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint: string;
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(BREAKPOINTS)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};
