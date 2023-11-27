import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilePlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.25 19.25h-3.5a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2H14L18.25 9v2.25M17 14.75v4.5M19.25 17h-4.5M18 9.25h-4.25V5"
    />
  </svg>
);
const ForwardRef = forwardRef(FilePlus);
export default ForwardRef;
