import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, space, color, textAlign } from 'styled-system'
import theme from './theme'

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase'
      }
    : null

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null)

const Text = styled.div`
  ${italic} ${fontSize} ${space} ${color} ${caps} ${regular} ${bold} ${textAlign};
`

Text.displayName = 'Text'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Text.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  ...textAlign.propTypes,
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.string,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Text.defaultProps = {
  theme: theme
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
