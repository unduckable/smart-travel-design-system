import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CheckCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.75 12.75.434.924a1 1 0 0 0 1.772.073L14.25 9.75M12 19.25a7.25 7.25 0 1 1 0-14.5 7.25 7.25 0 0 1 0 14.5"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckCircle);
export default ForwardRef;
