import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Truck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.25 15.25H4.75V4.75h10.5v10.5m0 0h4v-3.5a3 3 0 0 0-3-3h-1v6.5m-6 2.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m9 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Truck);
export default ForwardRef;
