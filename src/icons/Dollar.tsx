import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Dollar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.25 8.75h-2.875a1.625 1.625 0 1 0 0 3.25h1.25a1.625 1.625 0 1 1 0 3.25H9.75M12 7.75v.5m0 7.5v.5M19.25 12a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Dollar);
export default ForwardRef;
