import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Clock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 8v4l2 2m5.25-2a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Clock);
export default ForwardRef;
