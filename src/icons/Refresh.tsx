import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Refresh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.25 4.75 8.75 7l2.5 2.25m1.5 10 2.5-2.25-2.5-2.25M9.75 7h3.5a6 6 0 0 1 6 6v.25m-5 3.75h-3.5a6 6 0 0 1-6-6v-.25"
    />
  </svg>
);
const ForwardRef = forwardRef(Refresh);
export default ForwardRef;
