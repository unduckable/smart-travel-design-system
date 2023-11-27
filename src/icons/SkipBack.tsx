import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SkipBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 5.75v12.5m12.5-12.5L9.75 12l8.5 6.25z"
    />
  </svg>
);
const ForwardRef = forwardRef(SkipBack);
export default ForwardRef;
