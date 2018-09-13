import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Heading } from '../src'

const description =
  'A type of the <Text> component' +
  ' using HTML h1-h6 element for setting section headings,' +
  ' supporting all <Text> props'

storiesOf('Heading', module)
  .add(
    'Heading component',
    withInfo({
      inline: true,
      text: description
    })(() => <Heading m={3}>Heading component</Heading>)
  )
  .add('Using dot-notation with h1-h6', () => (
    <section>
      <Heading.h1>Heading h1</Heading.h1>
      <Heading.h2>Heading h2</Heading.h2>
      <Heading.h3>Heading h3</Heading.h3>
      <Heading.h4>Heading h4</Heading.h4>
      <Heading.h5>Heading h5</Heading.h5>
      <Heading.h6>Heading h6</Heading.h6>
    </section>
  ))
  .add('Using <Text> props', () => (
    <section>
      <Heading align="left" bold fontSize={6} color="info">
        Heading Left
      </Heading>
      <Heading align="center" medium fontSize={5} color="success">
        Heading Center
      </Heading>
      <Heading align="right" regular fontSize={4} color="warning">
        Heading Right
      </Heading>
    </section>
  ))
