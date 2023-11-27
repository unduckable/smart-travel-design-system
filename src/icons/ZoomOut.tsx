import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ZoomOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.5 15.5 3.75 3.75m-6-8.25h-4.5m8.5 0a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomOut);
export default ForwardRef;
