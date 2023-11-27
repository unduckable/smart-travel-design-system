import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Monitor1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 15.25h7.5a2 2 0 0 0 2-2v-6.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2zm0 0s.25 3-1.75 4h8c-2-1-1.75-4-1.75-4"
    />
  </svg>
);
const ForwardRef = forwardRef(Monitor1);
export default ForwardRef;
