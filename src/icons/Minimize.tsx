import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Minimize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 19.25v-2.5a2 2 0 0 0-2-2h-2.5m10 4.5v-2.5a2 2 0 0 1 2-2h2.5m-4.5-10v2.5a2 2 0 0 0 2 2h2.5m-10-4.5v2.5a2 2 0 0 1-2 2h-2.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Minimize);
export default ForwardRef;
