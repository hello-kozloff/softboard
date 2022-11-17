import * as React from 'react'
import * as Styled from './styled'
import { RoutePath } from 'types/router'
import useLogged from 'hooks/useLogged'
import Link from './Item'

const config = {
  public: [],
  protected: [
    {
      to: RoutePath.PROJECTS,
      children: <span>Projects</span>,
    },
    {
      to: RoutePath.SETTINGS,
      children: <span>Settings</span>,
    },
  ],
}

export const Navigation = () => {
  const isLogged = useLogged()
  const links = !isLogged ? config.public : config.protected

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
