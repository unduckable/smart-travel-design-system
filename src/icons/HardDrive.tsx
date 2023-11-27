import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HardDrive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 14v-2.093a1 1 0 0 1 .048-.306l1.979-6.157a1 1 0 0 1 .952-.694h8.542a1 1 0 0 1 .952.694l1.979 6.157a.999.999 0 0 1 .048.306V14m-11.5 1.25h1.5m3.5 0h3.5m-11.5-3.5h14.5v6.5a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1z"
    />
  </svg>
);
const ForwardRef = forwardRef(HardDrive);
export default ForwardRef;
