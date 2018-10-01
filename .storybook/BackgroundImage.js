import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage, Box, Text, Flex } from '../src'

const image =
  'https://source.unsplash.com/random/1280x720'

storiesOf('BackgroundImage', module)
  .add('Basic', () => (
    <Box>
      <BackgroundImage image={image} width="320px">
        <Box p={4}>
          <Text fontSize={6} bold align="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  ))
  .add('Fixed Height', () => (
    <Box>
      <BackgroundImage height="320px" image={image} width="360px">
        <Box p={4}>
          <Text fontSize={6} bold align="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  ))
  .add('Responsive', () => (
    <Flex>
      <BackgroundImage
        width={['100px', '216px', '260px']}
        height="320px"
        image={image}
      >
        <Box p={4}>
          <Text fontSize={6} bold align="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Flex>
  ))
