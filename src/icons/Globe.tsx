import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Globe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 19.25a7.25 7.25 0 1 0 0-14.5m0 14.5a7.25 7.25 0 1 1 0-14.5m0 14.5c1.243 0 3.25-2.75 3.25-7.25S13.243 4.75 12 4.75m0 14.5c-1.243 0-3.25-2.75-3.25-7.25S10.757 4.75 12 4.75M5 12h14"
    />
  </svg>
);
const ForwardRef = forwardRef(Globe);
export default ForwardRef;
