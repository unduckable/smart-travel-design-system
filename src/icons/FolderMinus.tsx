import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 19.25h-5.5a2 2 0 0 1-2-2v-9.5h12.5a2 2 0 0 1 2 2v2.5M13.5 7.5l-.931-1.708a2 2 0 0 0-1.756-1.042H6.75a2 2 0 0 0-2 2V11m14.5 6h-3.5"
    />
  </svg>
);
const ForwardRef = forwardRef(FolderMinus);
export default ForwardRef;
