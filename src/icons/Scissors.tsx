import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Scissors = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 15 10.25-8.25M9 9l10.25 7.25M9.25 8a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m0 8a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Scissors);
export default ForwardRef;
