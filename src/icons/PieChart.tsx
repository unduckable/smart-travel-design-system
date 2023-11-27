import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PieChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.75 5v5.25a2 2 0 0 0 2 2H19m.25-.25a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(PieChart);
export default ForwardRef;
