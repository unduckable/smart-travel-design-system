import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Mail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.5 6.5 6.5 5.75 6.5-5.75M6.75 18.25h10.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Mail);
export default ForwardRef;
