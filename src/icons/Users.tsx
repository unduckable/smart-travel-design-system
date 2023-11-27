import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Users = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.75 14c2.079 0 2.93 2.148 3.274 3.696.185.836-.49 1.554-1.347 1.554h-.927m-2-9c1.519 0 2.5-1.231 2.5-2.75s-.981-2.75-2.5-2.75m-1.532 14.5H5.782c-.565 0-1.009-.468-.897-1.021C5.196 16.7 6.21 14 9.5 14s4.304 2.701 4.615 4.229c.112.553-.332 1.021-.897 1.021M12.25 7.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Users);
export default ForwardRef;
