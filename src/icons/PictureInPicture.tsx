import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PictureInPicture = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.25 17.25h-.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v2.5m-7.5 10h6.5a1 1 0 0 0 1-1v-4.5a1 1 0 0 0-1-1h-6.5a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1"
    />
  </svg>
);
const ForwardRef = forwardRef(PictureInPicture);
export default ForwardRef;
