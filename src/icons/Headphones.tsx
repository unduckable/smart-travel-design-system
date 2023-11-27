import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Headphones = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 16v-3.75a7.25 7.25 0 1 0-14.5 0V16m2.7 3.25a2.7 2.7 0 0 1-2.7-2.7v-1.1a2.7 2.7 0 0 1 2.7-2.7 1.8 1.8 0 0 1 1.8 1.8v2.9a1.8 1.8 0 0 1-1.8 1.8m9.1 0a1.8 1.8 0 0 1-1.8-1.8v-2.9a1.8 1.8 0 0 1 1.8-1.8 2.7 2.7 0 0 1 2.7 2.7v1.1a2.7 2.7 0 0 1-2.7 2.7"
    />
  </svg>
);
const ForwardRef = forwardRef(Headphones);
export default ForwardRef;
