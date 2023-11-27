import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cpu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 4.75v1.5m9.5 3.5h-1.5m-8 8v1.5m-3.5-9.5h-1.5m9.5-5v1.5m5 8h-1.5m-3.5 3.5v1.5m-8-5h-1.5m4 3h6.5a2 2 0 0 0 2-2v-6.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Cpu);
export default ForwardRef;
