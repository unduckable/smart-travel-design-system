import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoCameraOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.25 10 4-2.25v8.5l-4-2.25zm0 0V8.75a2 2 0 0 0-2-2h-3.5m5.5 10.5h-8.5a2 2 0 0 1-2-2v-8.5zm0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(VideoCameraOff);
export default ForwardRef;
