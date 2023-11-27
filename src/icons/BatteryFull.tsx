import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BatteryFull = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 9.75v4.5M11 9.75v4.5m3.25-4.5v4.5m3.5-3.5H18a1.25 1.25 0 1 1 0 2.5h-.25m-11 4h8.5a2 2 0 0 0 2-2v-6.5a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(BatteryFull);
export default ForwardRef;
