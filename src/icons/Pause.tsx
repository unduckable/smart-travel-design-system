import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Pause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.25 6.75v10.5m-6.5-10.5v10.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Pause);
export default ForwardRef;
