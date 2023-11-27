import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Flag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 13.25v-7.5S8.5 3.5 12 5.75s6.25 0 6.25 0v7.5s-2.75 2.25-6.25 0-6.25 0-6.25 0m0 0v6"
    />
  </svg>
);
const ForwardRef = forwardRef(Flag);
export default ForwardRef;
