import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider, Box } from "../src";
import "storybook-chromatic";


addDecorator(story => (
  <ThemeProvider>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
));

const req = require.context(".", true, /\.js$/);

const load = () => {
  req.keys().forEach(req);
};

configure(load, module);
