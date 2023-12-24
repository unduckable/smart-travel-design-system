import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef } from "react";

export interface ILoader extends VariantProps<typeof loaderClasses>, TestProps {
  className?: string;
  /**
   * Value indicating progress for linear loader. Should be between 0 and 1.
   */
  value?: number;
}

const loaderClasses = cva("st-loader", {
  variants: {
    type: {
      spinner: "s-text-blue-500",
      linear: "s-h-0.5 s-bg-gray-100 s-relative",
    },
  },
});

export const Loader: FC<ILoader> = forwardRef<HTMLDivElement, ILoader>((props, ref) => {
  const { type, className, value } = props;

  return type === "spinner" ? (
    <div ref={ref} className={loaderClasses({ className, type })}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 210 210"
        color="currentColor"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0" stop-opacity="0" stop-color="currentColor" />
            <stop offset="1" stop-opacity="0.5" stop-color="currentColor" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0" stop-opacity="1" stop-color="currentColor" />
            <stop offset="1" stop-opacity="0.5" stop-color="currentColor" />
          </linearGradient>
        </defs>
        <g stroke-width="20" transform="matrix(0.976527, 0, 0, 0.972714, 7.2524, 8.134189)">
          <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
          <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />
          <path stroke="currentColor" stroke-linecap="round" d="M 4 100 A 96 96 0 0 1 4 98" />
        </g>
        <animateTransform
          from="0 0 0"
          to="360 0 0"
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1200ms"
        />
      </svg>
    </div>
  ) : (
    <div className={loaderClasses({ className, type })} ref={ref}>
      <span className="s-absolute s-left-0 s-top-0 s-bottom-0 s-bg-blue-500" style={{ width: `${100 * value}%` }} />
    </div>
  );
});

Loader.defaultProps = {
  type: "spinner",
  value: 0,
};
