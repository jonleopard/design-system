import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box } from '../src'

const description =
  'A low-level layout component for setting width, margin, padding, and color'

storiesOf('Box', module)
  .add(
    'Layout component',
    withInfo({
      text:
        'A low-level layout component for setting width, margin, padding, and color',
      inline: true
    })(() => <Box p={3}>Hello</Box>)
  )
  .add('Padding', () => <Box p={3}>Hello</Box>)
  .add('Margin', () => <Box m={3}>Hello</Box>)
  .add('Color', () => (
    <Box p={3} color="primary">
      Hello
    </Box>
  ))
  .add('Background Color', () => (
    <Box p={3} color="white" bg="accent">
      Hello
    </Box>
  ))
  .add('Width', () => (
    <Box p={3} width={1 / 2} color="white" bg="success">
      Half Width
    </Box>
  ))
  .add('Pixel Width', () => (
    <Box p={3} width={256} color="white" bg="warning">
      256px width
    </Box>
  ))
  .add('VW Width', () => (
    <Box p={3} width="50vw" color="white" bg="error">
      50vw width
    </Box>
  ))
  .add('Directional Padding', () => (
    <Box p={3}>
      <Box m={1} pt={3} color="white" bg="error">
        Padding Top
      </Box>
      <Box m={1} pr={3} color="white" bg="warning">
        Padding Right
      </Box>
      <Box m={1} pb={3} color="white" bg="success">
        Padding Bottom
      </Box>
      <Box m={1} pl={3} color="white" bg="base">
        Padding Left
      </Box>
      <Box m={1} px={3} color="white" bg="accent">
        Padding X-Axis
      </Box>
      <Box m={1} py={3} color="white" bg="black">
        Padding Y-Axis
      </Box>
    </Box>
  ))
  .add('Directional Margin', () => (
    <Box p={3}>
      <Box mt={3} color="slate" bg="error">
        Margin Top
      </Box>
      <Box mr={3} color="slate" bg="warning">
        Margin Right
      </Box>
      <Box mb={3} color="slate" bg="success">
        Margin Bottom
      </Box>
      <Box ml={3} color="slate" bg="base">
        Margin Left
      </Box>
      <Box mx={3} color="slate" bg="accent">
        Margin X-Axis
      </Box>
      <Box my={3} color="slate" bg="black">
        Margin Y-Axis
      </Box>
    </Box>
  ))
