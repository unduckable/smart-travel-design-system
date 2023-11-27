import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Sticker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 12A7.25 7.25 0 1 1 12 4.75M19.25 12C14 12 12 10 12 4.75M19.25 12 12 4.75"
    />
  </svg>
);
const ForwardRef = forwardRef(Sticker);
export default ForwardRef;
