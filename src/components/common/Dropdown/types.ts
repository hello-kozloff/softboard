import * as React from 'react'
import { LinkProps } from './Link'

export interface DropdownProps {
  config: LinkProps[][]
  children: React.ReactNode
  defaultOpen?: boolean

  onChange?(isOpen: boolean): void
}
