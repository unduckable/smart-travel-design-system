import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShieldTick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.75 12.75 1.25 1.5 3.25-4.5M4.75 8 12 4.75 19.25 8S20 19.25 12 19.25 4.75 8 4.75 8"
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldTick);
export default ForwardRef;
