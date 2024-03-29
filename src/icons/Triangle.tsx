import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Triangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.969 16.354 5.236-10.497c.737-1.472 2.834-1.472 3.57 0l5.264 10.497c.665 1.33-.3 2.896-1.785 2.896h-10.5c-1.486 0-2.45-1.567-1.785-2.896"
    />
  </svg>
);
const ForwardRef = forwardRef(Triangle);
export default ForwardRef;
