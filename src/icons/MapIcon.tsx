import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MapIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.25 4.75-4.5 2v12.5l4.5-2m0-12.5v12.5m0-12.5 5.5 2m-5.5 10.5 5.5 2m0-12.5 4.5-2v12.5l-4.5 2m0-12.5v12.5"
    />
  </svg>
);
const ForwardRef = forwardRef(MapIcon);
export default ForwardRef;
