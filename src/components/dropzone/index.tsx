import Close from "@/src/icons/Close";
import File from "@/src/icons/File";
import Photo from "@/src/icons/Photo";
import Refresh from "@/src/icons/Refresh";
import Trash from "@/src/icons/Trash";
import Upload from "@/src/icons/Upload";
import Video from "@/src/icons/Video";
import { TestProps, formatBytes } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React, { FC, ReactNode, forwardRef, useEffect, useState } from "react";
import { DropZone, DropZoneProps, FileTrigger, Group, Text } from "react-aria-components";
import { ReactSortable } from "react-sortablejs";
import { Button } from "../button";
import { Icon } from "../icon";

export interface IFileUpload {
  id: string;
  status: "uploading" | "uploaded" | "error";
  progress?: number;
  content: File;
}

export interface IDropzone extends VariantProps<typeof dropzoneClasses>, Omit<DropZoneProps, "children">, TestProps {
  placeholder?: string;
  uploads?: IFileUpload[];
  children?: (file: IFileUpload) => ReactNode;
  onChangeUploads: (state: IFileUpload[]) => void;
  onPressFileAction: (index: number, status: IFileUpload["status"]) => void;
  onPressThumbnailAction: (status: IFileUpload["status"]) => void;
  onSelect: (files: FileList) => void;
}

const dropzoneClasses = cva(
  [
    "st-dropzone",
    "s-relative s-overflow-hidden s-flex s-flex-col s-gap-4 s-items-center s-justify-center s-text-gray-500",
    "s-rounded-lg s-bg-gray-50 dark:s-bg-white-100",
    "drop-target:s-border-blue-500",
  ],
  {
    variants: {
      type: {
        "multiple-media": "",
        "single-media": "drop-target:s-bg-blue-100",
        files: "drop-target:s-bg-blue-100",
      },
      hasThumbnail: {
        true: "",
        false:
          "s-border-[1px] s-border-gray-200 dark:s-border-white-200 s-border-dashed s-h-[155px] hover:s-bg-gray-100 dark:hover:s-bg-white-200 dark:hover:s-border-white-300 s-px-10",
      },
    },
    compoundVariants: [
      {
        type: "multiple-media",
        hasThumbnail: true,
        className: "s-p-2",
      },
    ],
  },
);

const fileClasses = cva(["s-flex s-items-center s-rounded-lg s-border-[1px] s-border-gray-100 s-p-1"], {
  variants: {
    isError: {
      true: "s-border-invalid",
    },
  },
});

const thumbnailClasses = cva(["s-h-full s-w-full s-object-contain"], {
  variants: {
    isUploading: {
      true: "s-opacity-60",
    },
  },
});

export const Dropzone: FC<IDropzone> = forwardRef<HTMLDivElement, IDropzone>((props, ref) => {
  const {
    children,
    className,
    placeholder,
    type,
    uploads,
    onChangeUploads,
    onPressThumbnailAction,
    onPressFileAction,
    onSelect,
    ...rest
  } = props;
  const [thumbnail, setThumbnail] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (uploads[0]) {
      setThumbnail(URL.createObjectURL(uploads[0].content));
    }
  }, [uploads]);

  const getFileIcon = (type?: string) => {
    if (type?.startsWith("image")) return Photo;
    else if (type?.startsWith("video")) return Video;
    else return File;
  };

  const getFileActionIcon = (status: IFileUpload["status"]) => {
    if (status === "uploading") return Close;
    else if (status === "error") return Refresh;
    else return Trash;
  };

  return (
    <Group>
      <DropZone className={dropzoneClasses({ className, type, hasThumbnail: !!thumbnail })} {...rest}>
        {type === "single-media" && thumbnail && uploads[0].status !== "error" ? (
          <>
            <img
              className={thumbnailClasses({ isUploading: uploads[0].status === "uploading" })}
              src={thumbnail}
              alt={uploads[0]?.content.name}
            />
            <Button
              intent="tertiary"
              shape="pill"
              prefixIcon={uploads[0].status === "uploading" ? Close : Trash}
              isSquare
              className="s-absolute s-right-4 s-top-4 s-bg-gray-900 s-text-white-900"
              onPress={() => onPressThumbnailAction(uploads[0].status)}
            />
          </>
        ) : type === "multiple-media" && uploads.length > 0 ? (
          <div className="">
            <ReactSortable
              list={uploads}
              setList={(newState) => onChangeUploads(newState)}
              className="s-flex s-flex-wrap s-gap-2"
              direction="horizontal"
              filter="#file-trigger"
              onStart={() => setIsDragging(true)}
              onEnd={() => setIsDragging(false)}
            >
              {uploads.map((item) => children(item))}
              <div
                id="file-trigger"
                className={`s-aspect-square s-w-40 s-items-center s-justify-center s-overflow-hidden s-rounded-md 
                s-border-[1px] s-border-dashed s-border-gray-200 dark:s-border-white-200 ${
                  isDragging ? "s-hidden" : "s-flex"
                }`}
              >
                <FileTrigger allowsMultiple={false} onSelect={onSelect}>
                  <Button
                    intent="secondary-outline"
                    shape="pill"
                    isSquare
                    prefixIcon={Upload}
                    className="s-bg-white-900 dark:s-border-white-300 dark:s-bg-transparent"
                  />
                </FileTrigger>
              </div>
            </ReactSortable>
          </div>
        ) : (
          <>
            <FileTrigger allowsMultiple={type === "files" || type === "multiple-media"} onSelect={onSelect}>
              <Button
                intent="secondary-outline"
                shape="pill"
                isSquare
                prefixIcon={Upload}
                className="s-bg-white-900 dark:s-border-white-300 dark:s-bg-transparent"
              />
              <Text className="s-text-sm s-font-normal dark:s-text-white-500">{placeholder}</Text>
            </FileTrigger>
          </>
        )}
      </DropZone>

      {type === "single-media" && uploads[0]?.status === "error" && (
        <Text className="s-mt-2 s-block s-text-xs s-font-normal s-text-invalid">
          Uploading failed, please try again
        </Text>
      )}

      {type === "files" && uploads.length > 0 && (
        <>
          <div className="s-mt-4 s-flex s-flex-col s-gap-2">
            {uploads.map((item, index) => (
              <div className={fileClasses({ isError: item.status === "error" })} key={item.id}>
                <div className="s-mr-2 s-inline-flex s-rounded-md s-bg-gray-100 s-p-3">
                  <Icon source={getFileIcon(item.content.type)} className="s-text-gray-400" size="md" />
                </div>
                <div className="s-flex-1">
                  <p className="s-mb-1 s-text-xs">{item.content.name}</p>
                  <p className="s-text-xs s-text-gray-400">
                    {item.status === "error" ? (
                      <span className="s-text-invalid">Error</span>
                    ) : item.status === "uploading" ? (
                      "Loading..."
                    ) : (
                      formatBytes(item.content.size)
                    )}
                  </p>
                </div>
                <Button
                  intent="tertiary"
                  prefixIcon={getFileActionIcon(item.status)}
                  isSquare
                  className="s-mr-1 s-text-gray-400 focus:s-outline-0"
                  onPress={() => onPressFileAction(index, item.status)}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </Group>
  );
});

Dropzone.defaultProps = {
  type: "files",
  placeholder: "Click to upload or drag and drop your files here.",
  uploads: [],
  onPressFileAction: () => {},
  onSelect: () => {},
};
