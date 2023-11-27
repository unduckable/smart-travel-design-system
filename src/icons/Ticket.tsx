import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Ticket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 6.75a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v1.296c0 .463.328.852.74 1.065a3.25 3.25 0 0 1 0 5.778c-.412.213-.74.602-.74 1.065v1.296a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1v-1.296c0-.463-.328-.852-.74-1.065a3.25 3.25 0 0 1 0-5.778c.412-.213.74-.602.74-1.065z"
    />
  </svg>
);
const ForwardRef = forwardRef(Ticket);
export default ForwardRef;
