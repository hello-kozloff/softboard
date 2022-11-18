import * as React from 'react'
import * as Styled from './styled'
import useUser from 'hooks/useUser'
import Dropdown from 'components/common/Dropdown'
import { FiChevronDown } from 'react-icons/fi'
import dropdownConfig from './dropdownConfig'

export const Profile = () => {
  const user = useUser()
  const [isOpen, setOpen] = React.useState<boolean>(false)

  return (
    <Dropdown config={dropdownConfig} onChange={setOpen}>
      <Styled.Profile>
        <Styled.Username>{`${user.firstName} ${user.lastName[0]}.`}</Styled.Username>
        <Styled.Avatar src={user.avatar || '/img/not-found-avatar.jpeg'} />
        <Styled.Chevron animate={{ rotate: isOpen ? -180 : 0 }}>
          <FiChevronDown />
        </Styled.Chevron>
      </Styled.Profile>
    </Dropdown>
  )
}
