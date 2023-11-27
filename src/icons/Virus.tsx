import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Virus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.75 4.75h2.5m-2.5 14.5h2.5M12 5v2.25m0 9.5V19m4.243-13.01 1.767 1.767M5.99 16.243l1.767 1.767M16.95 7.05l-1.591 1.591M8.64 15.36l-1.59 1.59m12.199-6.2v2.5m-14.5-2.5v2.5M19 12h-2.25m-9.5 0H5m13.01 4.244-1.767 1.767M7.757 5.99 5.99 7.757m10.96 9.193-1.591-1.591M8.64 8.64l-1.59-1.59M16.25 12a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Virus);
export default ForwardRef;
