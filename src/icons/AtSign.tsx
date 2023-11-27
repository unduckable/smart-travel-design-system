import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AtSign = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 19.25a7.25 7.25 0 1 1 0-14.5c6.813 0 7.25 4.375 7.25 7.25v1.25a2 2 0 1 1-4 0v-4.5m0 3.25a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(AtSign);
export default ForwardRef;
