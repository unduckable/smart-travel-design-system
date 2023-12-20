import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 7.5v-.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v.75M5 13.25h14m-10.25-1.5v2.5m6.5-2.5v2.5m-8.5 5h10.5a2 2 0 0 0 2-2v-7.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2"
    />
  </svg>
);
const Briefcase = forwardRef(Icon);
export default Briefcase;
