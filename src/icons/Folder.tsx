import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Folder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.5 7.5-.931-1.708a2 2 0 0 0-1.756-1.042H6.75a2 2 0 0 0-2 2V11m14.5-1.25v7.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2v-9.5h12.5a2 2 0 0 1 2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Folder);
export default ForwardRef;
