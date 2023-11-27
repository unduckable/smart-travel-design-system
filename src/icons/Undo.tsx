import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Undo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 4.75 4.75 9l4.5 4.25M5.5 9h9.75a4 4 0 0 1 4 4v6.25"
    />
  </svg>
);
const ForwardRef = forwardRef(Undo);
export default ForwardRef;
