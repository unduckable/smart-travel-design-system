import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LockUnlocked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 10.5v-.657c0-1.228-.05-2.544.674-3.537C9 5.517 10.057 4.75 12 4.75c2 0 3.25 1.5 3.25 1.5m-7.5 13h8.5a2 2 0 0 0 2-2v-5.5a1 1 0 0 0-1-1H6.75a1 1 0 0 0-1 1v5.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(LockUnlocked);
export default ForwardRef;
