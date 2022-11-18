import * as React from 'react'
import * as Styled from './styled'
import { HeaderProps, HeaderVariant } from './types'
import Container from 'components/common/Container'
import useLogged from 'hooks/useLogged'
import Logo from './Logo'
import Navigation from './Navigation'
import Connect from './Connect'
import Profile from './Profile'

export const Header = ({ variant = HeaderVariant.Primary }: HeaderProps) => {
  const isLogged = useLogged()

  return (
    <Styled.Header variant={variant}>
      <Container>
        <Logo />
        <Navigation />
        {!isLogged ? <Connect /> : <Profile />}
      </Container>
    </Styled.Header>
  )
}
