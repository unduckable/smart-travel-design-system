import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BellOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.25 6.875V12l2 4.25H7.75m-2-2.125 1-2.125v-2c0-2.9 2.35-5.25 5.25-5.25 0 0 1.61 0 2.594.5M9 16.75s0 2.5 3 2.5 3-2.5 3-2.5m4.25-12-14.5 14.5"
    />
  </svg>
);
const ForwardRef = forwardRef(BellOff);
export default ForwardRef;
