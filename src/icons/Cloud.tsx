import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 14A3.25 3.25 0 0 0 8 17.25h8a3.25 3.25 0 0 0 .243-6.491 4.25 4.25 0 0 0-8.486 0A3.25 3.25 0 0 0 4.75 14"
    />
  </svg>
);
const ForwardRef = forwardRef(Cloud);
export default ForwardRef;
