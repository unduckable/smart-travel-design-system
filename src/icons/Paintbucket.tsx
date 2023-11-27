import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Paintbucket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.25 7.75v9.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-9.5m12.5 0H5.75m12.5 0h1m-13.5 0h-1m7.5 4.5v-7.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Paintbucket);
export default ForwardRef;
