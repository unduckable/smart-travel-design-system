import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SettingsSliders = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 8h2.5m5.5 0h6.5m-14.5 8h7.5m5.5 0h1.5m-7-8a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m5 8a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsSliders);
export default ForwardRef;
