import * as React from 'react'
import * as Styled from './styled'
import useLogged from 'hooks/useLogged'
import Config from './config'
import Link from './Item'

export const Navigation = () => {
  const isLogged = useLogged()
  const links = !isLogged ? Config.public : Config.protected

  return (
    <Styled.Navigation>
      {links.map((link, index) => (
        <Link key={index} to={link.to}>
          {link.children}
        </Link>
      ))}
    </Styled.Navigation>
  )
}
