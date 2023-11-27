import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FastForward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 15.86-3.25 2.39V5.75L8 8.14m2.75-2.39 8.5 6.25-8.5 6.25z"
    />
  </svg>
);
const ForwardRef = forwardRef(FastForward);
export default ForwardRef;
