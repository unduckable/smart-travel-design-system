import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const File = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 9.25h-4.25V5m2.5 14.25h-8.5a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2H14L18.25 9v8.25a2 2 0 0 1-2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(File);
export default ForwardRef;
