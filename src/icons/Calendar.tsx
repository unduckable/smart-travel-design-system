import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Calendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 4.75v3.5m8-3.5v3.5m-8.25 2.5h8.5m-9.5 8.5h10.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Calendar);
export default ForwardRef;
