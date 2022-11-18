import * as React from 'react'
import * as Styled from './styled'
import useUser from 'hooks/useUser'
import Dropdown, { DropdownProps } from 'components/common/Dropdown'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { RoutePath } from '../../../../../types/router'

const dropdownConfig: DropdownProps['config'] = [
  [
    {
      to: '/profile',
      children: <span>Your profile</span>,
    },
    {
      to: '/projects',
      children: <span>Your projects</span>,
    },
    {
      to: '/boards',
      children: <span>Your boards</span>,
    },
    {
      to: '/tasks',
      children: <span>Your tasks</span>,
    },
  ],
  [
    {
      to: '/profile/upgrade',
      children: <span>Upgrade</span>,
    },
    {
      to: '/profile/settings',
      children: <span>Settings</span>,
    },
  ],
  [
    {
      to: RoutePath.AUTH_LOGOUT,
      children: <span>Sign out</span>,
    },
  ],
]

export const Profile = () => {
  const user = useUser()
  const [isOpen, setOpen] = React.useState<boolean>(false)

  return (
    <Dropdown config={dropdownConfig} onChange={setOpen}>
      <Styled.Profile>
        <Styled.Username>{`${user.firstName} ${user.lastName[0]}.`}</Styled.Username>
        <Styled.Avatar src={user.avatar || '/img/not-found-avatar.jpeg'} />
        {!isOpen ? <FiChevronDown /> : <FiChevronUp />}
      </Styled.Profile>
    </Dropdown>
  )
}
