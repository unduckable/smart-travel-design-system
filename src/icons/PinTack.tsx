import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PinTack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 14.5v4.75M8.75 7.75V10c-3 1-3 4.25-3 4.25h12.5s0-3.25-3-4.25V7.75l1-3h-8.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(PinTack);
export default ForwardRef;
