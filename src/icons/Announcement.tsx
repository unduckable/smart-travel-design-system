import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Announcement = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M16.5 15.25c1.35 0 2.75-2.521 2.75-5.25s-1.4-5.25-2.75-5.25m0 10.5c-1.35 0-2.75-2.521-2.75-5.25s1.4-5.25 2.75-5.25m0 10.5S8 13.5 7 13.25 4.75 11.69 4.75 10 6 7 7 6.75s9.5-2 9.5-2M6.75 13.5v3.75a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2V14.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Announcement);
export default ForwardRef;
