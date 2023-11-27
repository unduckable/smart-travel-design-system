import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Microphone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 12.75s.25 4.5 6.25 4.5 6.25-4.5 6.25-4.5m-6.25 5v1.5m0-5A3.25 3.25 0 0 1 8.75 11V8a3.25 3.25 0 0 1 6.5 0v3A3.25 3.25 0 0 1 12 14.25"
    />
  </svg>
);
const ForwardRef = forwardRef(Microphone);
export default ForwardRef;
