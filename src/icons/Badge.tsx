import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Badge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.25 8.75 4-4H5.75l4 4m7.5 5.25a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Badge);
export default ForwardRef;
