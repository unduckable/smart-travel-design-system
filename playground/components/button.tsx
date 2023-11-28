import { Alert, Avatar, AvatarGroup, Button, FloatingButton, FloatingButtonGroup, Icon, Link } from "@/src";
import React from "react";

export default function () {
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
    </div>
  );
}
