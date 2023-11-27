import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Dots = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Dots);
export default ForwardRef;
