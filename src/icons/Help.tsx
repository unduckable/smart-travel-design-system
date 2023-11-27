import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Help = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 17 2.5-2.5M17 17l-2.5-2.5m-5-5L7 7m7.5 2.5L17 7m2.25 5a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0m-4 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Help);
export default ForwardRef;
