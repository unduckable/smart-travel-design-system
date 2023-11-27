import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Percentage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.25 6.75-10.5 10.5M17.25 16a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-8-8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Percentage);
export default ForwardRef;
