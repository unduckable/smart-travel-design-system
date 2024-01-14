import Drag from "@/src/icons/Drag";
import Trash from "@/src/icons/Trash";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React, { FC, ReactNode, forwardRef } from "react";
import { Button } from "../button";

export interface IMedia extends VariantProps<typeof mediaClasses>, TestProps {
  type: "video" | "image";
  src: string;
  alt: string;
}

const mediaClasses = cva(["st-media"]);

export const Media: FC<IMedia> = forwardRef<HTMLDivElement, IMedia>((props, ref) => {
  const { type, src, alt } = props;
  return (
    <div className="s-group s-relative s-aspect-square s-w-40 s-overflow-hidden s-rounded-md">
      {type === "image" ? (
        <img src={src} alt={alt} className="s-h-full s-w-full s-object-contain" />
      ) : (
        <video src={src} className="s-h-full s-w-full s-object-contain" muted controls />
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
  src: "",
  alt: "",
};
