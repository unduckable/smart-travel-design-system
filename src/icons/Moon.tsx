import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Moon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.25 15.75c-1.015.54-2.02.5-3.25.5A7.25 7.25 0 0 1 7.75 9c0-1.23-.04-2.235.5-3.25-2.289 1.219-3.5 3.476-3.5 6.25A7.25 7.25 0 0 0 12 19.25c2.774 0 5.031-1.211 6.25-3.5M16 4.75C16 6.96 14.96 9 12.75 9 14.96 9 16 11.04 16 13.25 16 11.04 17.04 9 19.25 9 17.04 9 16 6.96 16 4.75"
    />
  </svg>
);
const ForwardRef = forwardRef(Moon);
export default ForwardRef;
