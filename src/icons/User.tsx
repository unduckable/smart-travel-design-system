import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.25 8a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0M6.847 19.25h10.305c1.142 0 2.022-.982 1.489-1.992C17.856 15.773 16.068 14 12 14s-5.856 1.773-6.64 3.258c-.534 1.01.346 1.992 1.487 1.992"
    />
  </svg>
);
const User = forwardRef(Icon);
export default User;
