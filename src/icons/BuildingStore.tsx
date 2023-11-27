import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BuildingStore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 7.75c0 1.243.75 2.5 2.25 2.5s2.5-1.257 2.5-2.5c0 1.243 1 2.5 2.5 2.5s2.5-1.257 2.5-2.5c0 1.243 1 2.5 2.5 2.5s2.25-1.257 2.25-2.5m-2 11.5H6.75a2 2 0 0 1-2-2V8.183a2 2 0 0 1 .18-.827l.537-1.184A2 2 0 0 1 7.288 5h9.424a2 2 0 0 1 1.821 1.172l.538 1.184a2 2 0 0 1 .18.827v9.067a2 2 0 0 1-2 2m-3 0v-3.5a2 2 0 0 0-2-2h-.5a2 2 0 0 0-2 2v3.5h4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(BuildingStore);
export default ForwardRef;
