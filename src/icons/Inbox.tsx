import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Inbox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 11.75 17.664 6.2a2 2 0 0 0-1.923-1.45H8.26A2 2 0 0 0 6.336 6.2L4.75 11.75m14.5 0v5.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2v-5.5m14.5 0h-4.42c-.425 0-.786.283-1.044.619A2.246 2.246 0 0 1 12 13.25a2.246 2.246 0 0 1-1.786-.881c-.258-.336-.62-.619-1.043-.619H4.75"
    />
  </svg>
);
const ForwardRef = forwardRef(Inbox);
export default ForwardRef;
