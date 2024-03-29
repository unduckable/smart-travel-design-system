import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UsersMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 17h-3.5m-4.5 2.25H5.782c-.565 0-1.009-.468-.897-1.021C5.196 16.7 6.21 14 9.5 14c.674 0 1.253.056 1.75.25m3.5-4c1.519 0 2.5-1.231 2.5-2.75s-.981-2.75-2.5-2.75m-2.5 2.75a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(UsersMinus);
export default ForwardRef;
