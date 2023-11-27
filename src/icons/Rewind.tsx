import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Rewind = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 15.86 3.25 2.39V5.75L16 8.14m-2.75-2.39L4.75 12l8.5 6.25z"
    />
  </svg>
);
const ForwardRef = forwardRef(Rewind);
export default ForwardRef;
