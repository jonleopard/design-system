import styled from 'styled-components'
import Button from './Button'
import theme from './theme'

const RedButton = styled(Button)`
  background-color: ${props => props.theme.colors.error};
  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.darkRed};
  }
`

RedButton.defaultProps = {
  theme
}

export default RedButton
