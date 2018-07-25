import styled from 'styled-components'
import Button from './Button'
import theme from './theme'

const GreenButton = styled(Button)`
  background-color: ${props => props.theme.colors.success};
  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.darkGreen};
  }
`

GreenButton.defaultProps = {
  theme
}

GreenButton.displayName = 'GreenButton'

export default GreenButton
