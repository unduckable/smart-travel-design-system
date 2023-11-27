import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Download = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 14.75v1.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-1.5m-7.25-.5v-9.5m0 9.5-3.25-3.5m3.25 3.5 3.25-3.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Download);
export default ForwardRef;
