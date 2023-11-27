import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Hashtag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.25 4.75-2.5 14.5m8.5-14.5-2.5 14.5m5.5-10.5H5.75m12.5 6.5H4.75"
    />
  </svg>
);
const ForwardRef = forwardRef(Hashtag);
export default ForwardRef;
