import * as React from 'react'
import * as Styled from './styled'
import { useMediaQuery } from 'usehooks-ts'
import useLogged from 'hooks/useLogged'
import Config from './config'
import Link from './Item'
import { media } from 'styles'

export const Navigation = () => {
  const isLogged = useLogged()
  const mediaTable = useMediaQuery(media.Medium)
  const links = !isLogged ? Config.public : Config.protected

  return (
    <Styled.Navigation>
      {!mediaTable &&
        links.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.children}
          </Link>
        ))}
    </Styled.Navigation>
  )
}
