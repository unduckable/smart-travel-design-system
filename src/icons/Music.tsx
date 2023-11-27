import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Music = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 17a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m0 0V6.75a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V14m0 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Music);
export default ForwardRef;
