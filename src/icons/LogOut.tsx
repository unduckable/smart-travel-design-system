import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LogOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.75 8.75 3.5 3.25-3.5 3.25M19 12h-8.25m4.5-7.25h-8.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h8.5"
    />
  </svg>
);
const ForwardRef = forwardRef(LogOut);
export default ForwardRef;
