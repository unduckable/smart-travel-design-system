import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Redo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.75 4.75 19.25 9m0 0-4.5 4.25M19.25 9H8.75a4 4 0 0 0-4 4v6.25"
    />
  </svg>
);
const ForwardRef = forwardRef(Redo);
export default ForwardRef;
