import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Media } from "../media";
import { Dropzone, IFileUpload } from "./";

const meta: Meta<typeof Dropzone> = {
  title: "Components/Dropzone",
  component: Dropzone,
};

export default meta;

type Story = StoryObj<typeof Dropzone>;
export const Default: Story = {
  render() {
    const [files, setFiles] = useState<IFileUpload[]>([]);

    const upload = () => {
      // Simulate upload
      setTimeout(() => {
        setFiles((files) => {
          const last = files.length - 1;
          return files.map((file, index) => ({ ...file, status: index === last ? "error" : file.status }));
        });
      }, 2000);
    };

    return (
      <>
        <Dropzone
          type="multiple-media"
          className="s-inline-flex s-w-auto"
          uploads={files}
          onPressFileAction={(index, status) => {}}
          onPressThumbnailAction={() => {}}
          onChangeUploads={(files) => {
            setFiles(files);
          }}
          onSelect={function (files) {
            setFiles((prevFiles) => {
              const newFiles: IFileUpload[] = [...files].map((file) => ({
                id: file.name + file.lastModified,
                content: file,
                status: "uploading",
              }));
              upload();
              return [...prevFiles, ...newFiles];
            });
          }}
        >
          {(file) => <Media type="image" src={URL.createObjectURL(file.content)} alt={file.content.name} />}
        </Dropzone>
      </>
    );
  },
};
