import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Link = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.75 13.25 18 12a4.243 4.243 0 0 0-6-6l-1.25 1.25m-3.5 3.5L6 12a4.243 4.243 0 1 0 6 6l1.25-1.25m1-7-4.5 4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Link);
export default ForwardRef;
