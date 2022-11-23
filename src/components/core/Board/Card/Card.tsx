import * as React from 'react'
import * as Styled from './styled'
import type { CardProps } from './types'
import { TaskObject } from 'types/store'
import Tags from './Tags'

export const Card = ({ id, ...snapshot }: CardProps) => {
  const [task, setTask] = React.useState<TaskObject | null>(null)

  if (task === null) {
    return <span>Loading task...</span>
  }

  return (
    <Styled.Card {...snapshot}>
      <Styled.Name>{task.name}</Styled.Name>
      <Tags />
    </Styled.Card>
  )
}
