import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Crop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 7.75h10.5a1 1 0 0 1 1 1v10.5m3-3H8.75a1 1 0 0 1-1-1V4.75"
    />
  </svg>
);
const ForwardRef = forwardRef(Crop);
export default ForwardRef;
