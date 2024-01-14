import Drag from "@/src/icons/Drag";
import Trash from "@/src/icons/Trash";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React, { FC, ReactNode, forwardRef } from "react";
import { Button } from "../button";

export interface IMedia extends VariantProps<typeof mediaClasses>, TestProps {
  className?: string;
  src: string;
  alt: string;
}

const mediaClasses = cva([], {
  variants: {
    type: {
      video: "s-h-full s-w-full s-object-contain",
      image: "s-w-full",
    },
    ratio: {
      landscape: "s-aspect-[4/3]",
      wide: "s-aspect-video",
      square: "s-aspect-square",
      portrait: "s-aspect-[3/4]",
    },
  },
});

export const Media: FC<IMedia> = forwardRef<HTMLDivElement, IMedia>((props, ref) => {
  const { className, type, src, alt, ratio } = props;
  return (
    <div className={`st-media s-group s-relative s-overflow-hidden s-rounded-md ${className}`}>
      {type === "image" ? (
        <img src={src} alt={alt} className={mediaClasses({ type, ratio })} />
      ) : (
        <video src={src} className={mediaClasses({ type, ratio })} muted controls />
      )}
      <Button
        intent="tertiary"
        size="small"
        shape="pill"
        isSquare
        prefixIcon={Drag}
        className="s-pointer-events-none s-absolute s-right-2 s-top-2 s-block s-bg-gray-900 s-text-white-900 group-hover:s-block focus:s-outline-0 lg:s-hidden [&]:s-p-[5px]"
      />
      <Button
        intent="tertiary"
        size="small"
        shape="pill"
        isSquare
        prefixIcon={Trash}
        className="s-absolute s-right-2 s-top-12 s-block s-bg-gray-900 s-text-white-900 group-hover:s-block focus:s-outline-0 lg:s-hidden [&]:s-p-[5px]"
      />
    </div>
  );
});

Media.defaultProps = {
  type: "image",
  ratio: "square",
  src: "",
  alt: "",
};
