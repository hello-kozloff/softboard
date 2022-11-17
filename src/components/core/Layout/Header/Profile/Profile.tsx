import * as React from 'react'
import * as Styled from './styled'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const Profile = () => {
  const user = useSelector((state: RootState) => state.user)
  if (!user) return null

  return (
    <Styled.Profile>
      <Styled.Username>{`${user.firstName} ${user.lastName[0]}.`}</Styled.Username>
      <Styled.Avatar src={user.avatar || '/img/not-found-avatar.jpeg'} />
    </Styled.Profile>
  )
}
