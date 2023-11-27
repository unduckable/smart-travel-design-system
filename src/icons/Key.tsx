import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Key = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.5 9a3.5 3.5 0 1 1 2.755 3.42.75.75 0 0 0-.689.203l-.377.377H11.75a.75.75 0 0 0-.75.75v1.44l-.81.81H8.75a.75.75 0 0 0-.75.75v1.44l-.31.31H5.5v-2.19l5.877-5.876a.75.75 0 0 0 .202-.689A3.513 3.513 0 0 1 11.5 9M15 4a5 5 0 0 0-4.958 5.648L4.22 15.47A.75.75 0 0 0 4 16v3.25c0 .414.336.75.75.75H8a.75.75 0 0 0 .53-.22l.75-.75a.75.75 0 0 0 .22-.53v-1h1a.75.75 0 0 0 .53-.22l1.25-1.25a.75.75 0 0 0 .22-.53v-1h1a.75.75 0 0 0 .53-.22l.322-.322A5 5 0 1 0 15 4m1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Key);
export default ForwardRef;
