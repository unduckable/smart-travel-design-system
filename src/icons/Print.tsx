import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Print = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.75 10.5V4.75h10.5v5.75m-9.5 5.75h8.5m-11.5-5.5h14.5v6.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2z"
    />
  </svg>
);
const ForwardRef = forwardRef(Print);
export default ForwardRef;
