import * as React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react'
import type { TaskProps } from './types'
import { useStore } from 'store'
import Tags from './Tags'

export const Task = observer(({ id, snapshot }: TaskProps) => {
  const { board: BoardState } = useStore()
  const task = BoardState.tasks.find((task) => task.id === id)

  if (!task) {
    return <span>Loading task...</span>
  }

  return (
    <Styled.Card {...snapshot}>
      <Styled.Name>{task.name}</Styled.Name>
      {!!task.tags.length && <Tags />}
    </Styled.Card>
  )
})
