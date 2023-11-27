import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Building = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 6.75A2.75 2.75 0 0 1 7.75 4h8.5A2.75 2.75 0 0 1 19 6.75V18.5h.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H5zm5.5 11.75h3v-2.75c0-.69-.56-1.25-1.25-1.25h-.5c-.69 0-1.25.56-1.25 1.25zm4.5 0v-2.75A2.75 2.75 0 0 0 12.25 13h-.5A2.75 2.75 0 0 0 9 15.75v2.75H6.5V6.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25V18.5zM9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Building);
export default ForwardRef;
