import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IndentRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 5.75h8.5m-8.5 4h5.5m9-1L15.75 12l3.5 3.25m-14.5 3h8.5m-8.5-4h5.5"
    />
  </svg>
);
const ForwardRef = forwardRef(IndentRight);
export default ForwardRef;
