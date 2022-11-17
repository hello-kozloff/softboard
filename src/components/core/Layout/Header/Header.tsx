import * as React from 'react'
import * as Styled from './styled'
import { HeaderProps, HeaderVariant } from './types'
import useLogged from 'hooks/useLogged'
import Navigation from './Navigation'
import Connect from './Connect'
import Profile from './Profile'

export const Header = ({ variant = HeaderVariant.Primary }: HeaderProps) => {
  const isLogged = useLogged()

  return (
    <Styled.Header variant={variant}>
      <Navigation />
      {!isLogged ? <Connect /> : <Profile />}
    </Styled.Header>
  )
}
