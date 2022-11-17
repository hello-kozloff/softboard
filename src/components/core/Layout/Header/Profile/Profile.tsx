import * as React from 'react'
import * as Styled from './styled'
import useUser from 'hooks/useUser'

export const Profile = () => {
  const user = useUser()

  return (
    <Styled.Profile>
      <Styled.Username>{`${user.firstName} ${user.lastName[0]}.`}</Styled.Username>
      <Styled.Avatar src={user.avatar || '/img/not-found-avatar.jpeg'} />
    </Styled.Profile>
  )
}
