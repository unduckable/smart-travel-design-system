import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Pill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 15 6-6m-3-3.006L18.006 12A4.247 4.247 0 0 1 12 18.006L5.994 12A4.247 4.247 0 0 1 12 5.994"
    />
  </svg>
);
const ForwardRef = forwardRef(Pill);
export default ForwardRef;
