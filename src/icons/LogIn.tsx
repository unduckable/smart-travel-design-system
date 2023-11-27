import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LogIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.75 8.75 3.5 3.25-3.5 3.25m0-10.5h7.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-7.5M13 12H4.75"
    />
  </svg>
);
const ForwardRef = forwardRef(LogIn);
export default ForwardRef;
