import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Check = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.75 12.867 2.59 3.547a2 2 0 0 0 3.26-.043l6.65-9.621"
    />
  </svg>
);
const ForwardRef = forwardRef(Check);
export default ForwardRef;
