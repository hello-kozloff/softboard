import * as React from 'react'
import * as Styled from './styled'
import { useOnClickOutside, useToggle } from 'usehooks-ts'
import type { DropdownProps } from './types'
import Link from './Link'

export const Dropdown = ({
  config,
  children,
  defaultOpen = false,
}: DropdownProps) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const [isOpen, toggleOpen] = useToggle(defaultOpen)
  useOnClickOutside(dropdownRef, toggleOpen)

  return (
    <Styled.Container>
      <Styled.Target onClick={toggleOpen}>{children}</Styled.Target>
      {isOpen && (
        <Styled.Dropdown ref={dropdownRef}>
          {config.map((group, groupIndex) => (
            <Styled.Group key={groupIndex}>
              {group.map((link, linkIndex) => (
                <Link key={linkIndex} {...link} />
              ))}
            </Styled.Group>
          ))}
        </Styled.Dropdown>
      )}
    </Styled.Container>
  )
}
