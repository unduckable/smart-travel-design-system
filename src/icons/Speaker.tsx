import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Speaker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.25 4.75-6.75 4H7.75a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h2.75l6.75 4z"
    />
  </svg>
);
const ForwardRef = forwardRef(Speaker);
export default ForwardRef;
