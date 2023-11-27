import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloseCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5m2.25 5a7.25 7.25 0 1 1 0-14.5 7.25 7.25 0 0 1 0 14.5"
    />
  </svg>
);
const ForwardRef = forwardRef(CloseCircle);
export default ForwardRef;
