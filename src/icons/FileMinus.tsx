import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 19.25h-4.5a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2H14L18.25 9v4.25m1 4h-3.5m2.25-8h-4.25V5"
    />
  </svg>
);
const ForwardRef = forwardRef(FileMinus);
export default ForwardRef;
