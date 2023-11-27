import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CameraOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 7.75h-.75a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h10.086c.89 0 1.337-1.077.707-1.707L4.75 4.75m5 0h4.583a1 1 0 0 1 .923.615l.738 1.77a1 1 0 0 0 .923.615h.333a2 2 0 0 1 2 2v5.5M9.923 10.5a3.25 3.25 0 1 0 4.577 4.577"
    />
  </svg>
);
const ForwardRef = forwardRef(CameraOff);
export default ForwardRef;
