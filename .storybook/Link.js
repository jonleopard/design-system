import React from "react";
import { storiesOf } from "@storybook/react";
import { Link } from "../src";

storiesOf("Link", module)
  .add("Link component", () => (
    <Link href="https://www.jonleopard.com/" target="_blank">
      jonleopard.com
    </Link>
  ))
  .add("Link open self", () => (
    <Link href="https://www.jonleopard.com/" target="_self">
      Open the Homepage in the same window
    </Link>
  ))
  .add("Color", () => <Link color="muted">I'm a different color!</Link>);
