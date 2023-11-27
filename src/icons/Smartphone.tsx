import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Smartphone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.25 16.75h-.5m9-2.5s.5-.906.5-2.25c0-1.344-.5-2.25-.5-2.25m-12 9.5h6.5a2 2 0 0 0 2-2V6.75a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Smartphone);
export default ForwardRef;
