import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Archive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.25 8.75H5.75m12.5 0-.828 8.69a2 2 0 0 1-1.99 1.81H8.568a2 2 0 0 1-1.991-1.81L5.75 8.75m12.5 0a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m4 4.5h4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Archive);
export default ForwardRef;
