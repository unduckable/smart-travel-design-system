import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Broadcast = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.657 4.343a.75.75 0 0 0-1.06 1.06 6.5 6.5 0 0 1 0 9.193.75.75 0 1 0 1.06 1.06 8 8 0 0 0 0-11.313ZM7.404 5.403a.75.75 0 0 0-1.06-1.06 8 8 0 0 0 0 11.314.75.75 0 0 0 1.06-1.06 6.5 6.5 0 0 1 0-9.193Zm7.07 1.061a.75.75 0 0 1 1.062 0 5 5 0 0 1 0 7.072.75.75 0 0 1-1.061-1.061 3.5 3.5 0 0 0 0-4.95.75.75 0 0 1 0-1.06M9.526 7.525a.75.75 0 0 0-1.06-1.06 5 5 0 0 0 0 7.07.75.75 0 1 0 1.06-1.06 3.5 3.5 0 0 1 0-4.95M11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1.75 3.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Broadcast);
export default ForwardRef;
