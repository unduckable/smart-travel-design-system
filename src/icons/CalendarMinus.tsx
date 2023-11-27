import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 6.75H6.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h4.5M8 6.75h8m-8 0v-2m0 2v1.5m8-1.5h1.25a2 2 0 0 1 2 2v2.5M16 6.75v-2m0 2v1.5M19.25 17h-4.5m-7-6.25h8.5"
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarMinus);
export default ForwardRef;
