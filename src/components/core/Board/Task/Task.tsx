import * as React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react'
import type { TaskProps } from './types'
import { useStore } from 'store'
import Tags from './Tags'

export const Task = observer(({ index, snapshot }: TaskProps) => {
  const { board: BoardState } = useStore()
  const task = BoardState.tasks[index]

  if (!task && BoardState.loading) {
    return <span>Loading task...</span>
  }

  return (
    <Styled.Card {...snapshot}>
      <Styled.Name>{task.name}</Styled.Name>
      <Tags />
    </Styled.Card>
  )
})
