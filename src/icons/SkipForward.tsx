import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SkipForward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.25 5.75v12.5M5.75 5.75l8.5 6.25-8.5 6.25z"
    />
  </svg>
);
const ForwardRef = forwardRef(SkipForward);
export default ForwardRef;
