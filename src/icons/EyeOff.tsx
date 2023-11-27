import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EyeOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.625 10c.44.899.625 1.675.625 2 0 1-1.75 6.25-7.25 6.25a7.621 7.621 0 0 1-2-.256m-3-1.725C5.362 14.669 4.75 12.59 4.75 12c0-1 1.75-6.25 7.25-6.25 1.795 0 3.19.559 4.256 1.347M19.25 4.75l-14.5 14.5m5.659-5.659a2.25 2.25 0 0 1 3.182-3.182"
    />
  </svg>
);
const ForwardRef = forwardRef(EyeOff);
export default ForwardRef;
