import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Image, Box } from "../src";

const description = "A low-level layout component that renders an image";

storiesOf("Image", module)
  .add(
    "Image component",
    withInfo({
      text: description,
      inline: true
    })(() => (
      <Image src="https://source.unsplash.com/random/1280x720" />
    ))
  )

  .add("Responsive width, with Box", () => (
    <Box width={1 / 2}>
      <Image src="https://source.unsplash.com/random/1280x720" />
    </Box>
  ));
