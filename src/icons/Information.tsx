import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5 12a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
const Information = forwardRef(Icon);
export default Information;
