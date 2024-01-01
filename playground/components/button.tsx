import {
  Alert,
  Avatar,
  AvatarGroup,
  Button,
  Dropdown,
  FloatingButton,
  FloatingButtonGroup,
  Icon,
  Link,
  Select,
} from "@/src";
import React from "react";

export default function () {
  const [fieldState, setFieldState] = React.useState({
    selectedKey: null,
    inputValue: "",
  });

  const onSelectionChange = (id) => {
    console.log(222, id);
    // setFieldState({
    //   inputValue: null,
    //   selectedKey: id,
    // });
  };

  const onInputChange = (value: string) => {
    console.log(111, value);
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === "" ? null : prevState.selectedKey,
    }));
  };

  return (
    <div>
      <Button id="23" onPress={() => alert(213)}>
        Button
      </Button>

      <Avatar size="2xl" />

      <AvatarGroup>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>

      <Link>123</Link>
      <Link prefix={<Icon className="s-text-red-500" />}>123</Link>

      <Alert
        title="123"
        content="12312312"
        primaryAction={{ content: "123", action: () => alert(123) }}
        secondaryAction={{ content: "123", action: () => alert(123) }}
      />

      <FloatingButtonGroup>
        <FloatingButton />
        <FloatingButton />
      </FloatingButtonGroup>

      <Dropdown
        triggerElement={<Button>Hello World</Button>}
        onAction={(v) => console.log(v)}
        items={[
          { id: "1", content: "hi" },
          { id: "2", content: "hi2" },
        ]}
      />

      <Select
        items={[
          {
            id: "1",
            content: "Cat",
            helperText: "Help text",
            image: "https://placehold.co/400",
          },
          {
            id: "2",
            content: "Dog",
            helperText: "Help text",
            image: "https://placehold.co/400",
          },
          {
            id: "3",
            content: "Panda",
            helperText: "Help text",
            image: "https://placehold.co/400",
          },
          {
            id: "4",
            content: "Snake",
            helperText: "Help text",
            image: "https://placehold.co/400",
          },
        ]}
        label="Pick a engineering major"
        selectedKeys={fieldState.selectedKey}
        inputValue={fieldState.inputValue}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      />
    </div>
  );
}
