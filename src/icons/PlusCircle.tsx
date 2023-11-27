import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlusCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8.75v6.5M15.25 12h-6.5M12 19.25a7.25 7.25 0 1 1 0-14.5 7.25 7.25 0 0 1 0 14.5"
    />
  </svg>
);
const ForwardRef = forwardRef(PlusCircle);
export default ForwardRef;
