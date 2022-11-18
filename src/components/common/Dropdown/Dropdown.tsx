import * as React from 'react'
import * as Styled from './styled'
import { MotionProps } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'
import { PositioningPortal } from '@codastic/react-positioning-portal'
import type { DropdownProps } from './types'
import Link from './Link'

const dropdownAnimation: MotionProps = {
  initial: {
    opacity: 0,
    transform: 'translateY(0)',
  },
  animate: {
    opacity: 1,
    transform: 'translateY(8px)',
  },
  exit: {
    opacity: 0,
    transform: 'translateY(0)',
  },
  transition: {
    type: 'spring',
    delay: 0,
    bounce: 0.35,
    duration: 0.45,
  },
}

export const Dropdown = ({
  config,
  children,
  defaultOpen = false,
  onChange,
}: DropdownProps) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const [isOpen, setOpen] = React.useState(defaultOpen)

  const toggleOpen = () => {
    setOpen(!isOpen)
    onChange?.(!isOpen)
  }

  useOnClickOutside(dropdownRef, () => {
    toggleOpen()
  })

  return (
    <PositioningPortal
      isOpen={isOpen}
      portalContent={
        <Styled.Dropdown ref={dropdownRef} {...dropdownAnimation}>
          {config.map((group, groupIndex) => (
            <Styled.Group key={groupIndex}>
              {group.map((link, linkIndex) => (
                <Link key={linkIndex} {...link} />
              ))}
            </Styled.Group>
          ))}
        </Styled.Dropdown>
      }
    >
      <Styled.Target onClick={toggleOpen}>{children}</Styled.Target>
    </PositioningPortal>
  )
}
