import { Avatar, Button, Icon } from "@/src";
import React from "react";

export default function () {
  return (
    <div>
      <Button id="23" onPress={() => alert(213)}>
        Button
      </Button>

      <Icon className="s-text-red-500" />
      <Avatar />
    </div>
  );
}
