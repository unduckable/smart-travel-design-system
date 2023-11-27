import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Monitor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.25 19.25-3.25-2-3.25 2m-2-3h10.5a2 2 0 0 0 2-2v-7.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Monitor);
export default ForwardRef;
