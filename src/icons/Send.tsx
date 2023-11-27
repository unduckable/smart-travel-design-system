import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Send = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15.5v-2.75m0-8-7.25 14.5 7.25-3.5 7.25 3.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(Send);
export default ForwardRef;
