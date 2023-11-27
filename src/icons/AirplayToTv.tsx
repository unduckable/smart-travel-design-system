import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirplayToTv = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.75 17.25h.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h.5m1.75 2 3-3.5 3 3.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(AirplayToTv);
export default ForwardRef;
