import ArrowUp from "@/src/icons/ArrowUp";
import Clipboard from "@/src/icons/Clipboard";
import Eye from "@/src/icons/Eye";
import EyeOff from "@/src/icons/EyeOff";
import Information from "@/src/icons/Information";
import User from "@/src/icons/User";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from ".";
import { Icon } from "../icon";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

const templateArguments = {
  className: "s-w-80 s-min-w-fit",
  helperText: "This is a helper text",
  label: "Input",
  placeholder: "Enter some text",
  prefixAddon: "https://",
  suffixAddon: "USD",
  prefixIcon: {
    inheritColor: true,
    source: Clipboard,
    className: "s-cursor-pointer",
  },
  suffixIcon: {
    inheritColor: true,
    source: Clipboard,
    className: "s-cursor-pointer",
  },
  prefixSelect: {
    items: [
      { id: "usd", content: "USD" },
      { id: "eur", content: "EUR" },
      { id: "gbp", content: "GBP" },
    ],
  },
  suffixSelect: {
    items: [
      { id: "vn", content: "Vietnam" },
      { id: "us", content: "United States" },
      { id: "uk", content: "United Kingdom" },
    ],
  },
};

type Story = StoryObj<typeof Input>;
export const Default: Story = {
  args: { ...templateArguments, buttonAddon: { children: "Submit" } },
};
export const Disabled: Story = {
  args: {
    ...templateArguments,
    isDisabled: true,
  },
};
export const Invalid: Story = {
  args: {
    ...templateArguments,
    isInvalid: true,
  },
};

export const LeftAddon: Story = {
  args: {
    ...templateArguments,
    suffixAddon: undefined,
    suffixIcon: null,
    suffixSelect: undefined,
  },
};

export const RightAddon: Story = {
  args: {
    ...templateArguments,
    prefixAddon: undefined,
    prefixIcon: null,
    prefixSelect: undefined,
  },
};

export const External: Story = {
  args: {
    ...templateArguments,
    isExternal: true,
    suffixAddon: undefined,
    suffixIcon: null,
    suffixSelect: undefined,
  },
};

export const Examples: Story = {
  render() {
    const [type, setType] = useState<"password" | "text">("password");
    return (
      <div className="s-flex s-flex-col s-content-stretch s-gap-4 s-w-80">
        <Input
          label="Website URL"
          isRequired
          isExternal
          placeholder="www.example.com"
          suffixIcon={{ source: Clipboard }}
        />
        <Input
          label="Website URL"
          isRequired
          prefixAddon="https://"
          placeholder="www.example.com"
          suffixIcon={{ source: Clipboard }}
        />
        <Input label="Website URL" isRequired placeholder="www.example.com" suffixIcon={{ source: Clipboard }} />
        <Input
          label="Price"
          isRequired
          prefixAddon="$"
          placeholder="0.00"
          suffixSelect={{
            items: [
              { id: "usd", content: "USD" },
              { id: "eur", content: "EUR" },
              { id: "gbp", content: "GBP" },
            ],
          }}
        />
        <Input label="Price" isRequired prefixAddon="$" placeholder="0.00" suffixAddon="USD" />
        <Input label="Email" isRequired defaultValue="me@email.com" />
        <Input label="Email" defaultValue="me@email.com" helperText="We won't spam you, we promise :)" />
        <Input
          label="Email"
          isRequired
          tooltip="Emails are used to send you notifications and updates"
          helperText="We won't spam you, we promise :)"
        />
        <form>
          <Input
            validate={(value) => (value === "me@email.com" ? "That's not a valid email address" : "")}
            defaultValue="me@email.com"
            label="Email"
            isExternal
            isRequired
            tooltip="Emails are used to send you notifications and updates"
            helperText="We won't spam you, we promise :)"
            buttonAddon={{ children: "Submit", type: "submit", onKeyDown: (e) => e.preventDefault() }}
          />
        </form>
        <Input label="ID number" placeholder="000-00-0000" suffixIcon={{ source: Information }} />
        <Input
          label="Phone number"
          placeholder="+1 (555) 000-0000"
          prefixSelect={{
            items: [
              { id: "us", content: "US" },
              { id: "vn", content: "VN" },
              { id: "uk", content: "UK" },
            ],
          }}
        />
        <Input
          label="Team member"
          prefixIcon={{ source: User }}
          placeholder="John Doe"
          buttonAddon={{
            prefixIcon: ArrowUp,
            children: "Sort",
          }}
        />
        <Input label="Quick search" placeholder="Start typing..." suffixAddon="⌘K" />
        <Input
          label="Password"
          isRequired
          defaultValue="12345"
          type={type}
          suffixIcon={{
            source: type === "password" ? Eye : EyeOff,
            onClick: () => setType(type === "password" ? "text" : "password"),
          }}
        />
      </div>
    );
  },
};
