import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Play = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.25 12 5.75 5.75v12.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(Play);
export default ForwardRef;
