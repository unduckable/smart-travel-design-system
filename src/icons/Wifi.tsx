import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Wifi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" d="M12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 14.563a4.231 4.231 0 0 1 2.5-.813c.934 0 1.798.302 2.5.813m2.213-3.335A8.212 8.212 0 0 0 12 9.75a8.212 8.212 0 0 0-4.712 1.478M5 7.946a12.194 12.194 0 0 1 7-2.196c2.603 0 5.016.812 7 2.196"
    />
  </svg>
);
const ForwardRef = forwardRef(Wifi);
export default ForwardRef;
