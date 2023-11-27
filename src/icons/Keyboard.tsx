import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Keyboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5 6.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25zM6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-7.25 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Keyboard);
export default ForwardRef;
