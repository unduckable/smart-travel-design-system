import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./";

// BARE MINIMUM VALUE -> A11Y -> EVENTS
describe("test button", () => {
  it("renders correct label", () => {
    const text = "This is a button";
    const { getByText } = render(<Button>{text}</Button>);
    const element = getByText(text);

    expect(element).toBeTruthy();
  });

  it("renders correct a11y attributes", () => {
    const { getByRole, rerender } = render(<Button>Button</Button>);
    const element = getByRole("button");

    expect(element).toHaveAttribute("type", "button");

    rerender(<Button isDisabled>Button</Button>);
    expect(element).toHaveAttribute("disabled", "true");
  });

  it("triggers event on press", () => {
    const onPress = vi.fn();
    const { getByRole } = render(<Button onPress={onPress}>Button</Button>);
    const element = getByRole("button");

    fireEvent.click(element);
    expect(onPress).toBeCalled();
  });
});
