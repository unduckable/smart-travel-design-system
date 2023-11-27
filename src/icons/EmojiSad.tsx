import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EmojiSad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 4.75h6.5a4 4 0 0 1 4 4v6.5a4 4 0 0 1-4 4h-6.5a4 4 0 0 1-4-4v-6.5a4 4 0 0 1 4-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 15.25S9 12.75 12 12.75s4.25 2.5 4.25 2.5"
    />
    <path stroke="currentColor" d="M10.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM14.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
  </svg>
);
const ForwardRef = forwardRef(EmojiSad);
export default ForwardRef;
