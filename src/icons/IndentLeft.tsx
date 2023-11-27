import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IndentLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.75 5.75h8.5m-5.5 4h5.5m-14.5-1L8.25 12l-3.5 3.25m6 3h8.5m-5.5-4h5.5"
    />
  </svg>
);
const ForwardRef = forwardRef(IndentLeft);
export default ForwardRef;
