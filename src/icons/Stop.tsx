import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Stop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 6.75a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1H6.75a1 1 0 0 1-1-1z"
    />
  </svg>
);
const ForwardRef = forwardRef(Stop);
export default ForwardRef;
