import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Router = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M11.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12.5v-1.75M9.702 8.702a3.25 3.25 0 0 1 4.596 0M7.581 6.58a6.25 6.25 0 0 1 8.838 0M4.75 17.25v-2.5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2"
    />
  </svg>
);
const ForwardRef = forwardRef(Router);
export default ForwardRef;
