import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 16.75s0 2.5 3 2.5 3-2.5 3-2.5M17.25 10v2l2 4.25H4.75l2-4.25v-2a5.25 5.25 0 0 1 10.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Bell);
export default ForwardRef;
