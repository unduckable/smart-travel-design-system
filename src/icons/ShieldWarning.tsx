import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShieldWarning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.5 15a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2M4.75 8 12 4.75 19.25 8S20 19.25 12 19.25 4.75 8 4.75 8"
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldWarning);
export default ForwardRef;
