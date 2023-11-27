import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Copy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.5 15.25a1.75 1.75 0 0 1-1.75-1.75V6.75a2 2 0 0 1 2-2h6.75c.966 0 1.75.784 1.75 1.75m-4.5 12.75h6.5a2 2 0 0 0 2-2v-6.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Copy);
export default ForwardRef;
