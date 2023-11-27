import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StreamToTv = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" d="M5.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 8.25v-.5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-2.5m-10-3.5c2 0 3.5 1.5 3.5 3.5m-3.5-6.5c3.714 0 6.5 2.786 6.5 6.5"
    />
  </svg>
);
const ForwardRef = forwardRef(StreamToTv);
export default ForwardRef;
