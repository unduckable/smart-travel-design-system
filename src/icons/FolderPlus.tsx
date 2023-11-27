import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 19.25h-5.5a2 2 0 0 1-2-2v-9.5h12.5a2 2 0 0 1 2 2v2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.5 7.5-.931-1.708a2 2 0 0 0-1.756-1.042H6.75a2 2 0 0 0-2 2V11M17 14.75v4.5M19.25 17h-4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(FolderPlus);
export default ForwardRef;
