import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Battery = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.75 10.75H18a1.25 1.25 0 1 1 0 2.5h-.25m-11 4h8.5a2 2 0 0 0 2-2v-6.5a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Battery);
export default ForwardRef;
