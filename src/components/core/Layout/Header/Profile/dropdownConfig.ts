import { DropdownProps } from 'components/common/Dropdown'
import { RoutePath } from 'types/router'

const dropdownConfig: DropdownProps['config'] = [
  [
    {
      to: '/profile',
      children: 'Your profile',
    },
    {
      to: '/projects',
      children: 'Your projects',
    },
    {
      to: '/boards',
      children: 'Your boards',
    },
    {
      to: '/tasks',
      children: 'Your tasks',
    },
  ],
  [
    {
      to: '/profile/upgrade',
      children: 'Upgrade',
    },
    {
      to: '/profile/settings',
      children: 'Settings',
    },
  ],
  [
    {
      to: RoutePath.AUTH_LOGOUT,
      children: 'Sign out',
    },
  ],
]

export default dropdownConfig
