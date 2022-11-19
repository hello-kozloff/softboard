import * as React from 'react'
import * as Styled from './styled'
import type { InputProps } from './types'

const Input = React.forwardRef<HTMLDivElement, InputProps>(
  (props: InputProps, ref) => {
    return (
      <Styled.Wrapper ref={ref}>
        <Styled.Input {...props} />
      </Styled.Wrapper>
    )
  },
)

Input.displayName = 'Input'
export { Input }
