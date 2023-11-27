import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TrendingUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.75 11.25 5.5-5.5m1 2.5v-3.5h-3.5m-1.5 14.5h-.5a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1m6 0h-.5a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1m6 0h-.5a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1"
    />
  </svg>
);
const ForwardRef = forwardRef(TrendingUp);
export default ForwardRef;
