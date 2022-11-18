import * as React from 'react'
import * as Styled from './styled'
import { RoutePath } from 'types/router'

export const Logo = () => {
  return (
    <Styled.Logo to={RoutePath.HOME}>
      <span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 116 116"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="57.7107"
            y="-13"
            width="100"
            height="100"
            rx="32"
            transform="rotate(45 57.7107 -13)"
          />
        </svg>
      </span>
      SoftBoard
    </Styled.Logo>
  )
}
