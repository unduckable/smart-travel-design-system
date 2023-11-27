import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Mouse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 11.25v-3.5a3 3 0 0 1 3-3h1.75a3 3 0 0 1 3 3v9.5a2 2 0 0 0 2 2h.5m-11.5 0h2.5a3 3 0 0 0 3-3v-5.5a3 3 0 0 0-3-3h-2.5a3 3 0 0 0-3 3v5.5a3 3 0 0 0 3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(Mouse);
export default ForwardRef;
