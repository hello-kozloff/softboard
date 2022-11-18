import { DropdownProps } from 'components/common/Dropdown'
import { RoutePath } from 'types/router'

const dropdownConfig: DropdownProps['config'] = [
  [
    {
      to: RoutePath.HOME,
      children: 'Upgrade',
    },
    {
      to: RoutePath.SETTINGS,
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
