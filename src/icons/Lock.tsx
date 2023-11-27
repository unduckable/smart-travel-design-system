import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Lock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157m-8.5 8.75h8.5a2 2 0 0 0 2-2v-5.5a1 1 0 0 0-1-1H6.75a1 1 0 0 0-1 1v5.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Lock);
export default ForwardRef;
