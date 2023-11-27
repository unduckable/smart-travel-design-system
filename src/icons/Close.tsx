import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Close = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.25 6.75-10.5 10.5m0-10.5 10.5 10.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Close);
export default ForwardRef;
