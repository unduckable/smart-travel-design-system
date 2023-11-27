import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Rows = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 10.25h12.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1M5.75 19.25h12.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1"
    />
  </svg>
);
const ForwardRef = forwardRef(Rows);
export default ForwardRef;
