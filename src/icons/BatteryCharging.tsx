import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BatteryCharging = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.25 6.75h-1.5a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2h.5m7.5-10.5h.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-1.5m4-6.5H18a1.25 1.25 0 1 1 0 2.5h-.25m-6-6.5-3 5.25h4.5l-3 5.25"
    />
  </svg>
);
const ForwardRef = forwardRef(BatteryCharging);
export default ForwardRef;
