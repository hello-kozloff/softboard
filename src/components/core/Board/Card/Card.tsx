import * as React from 'react'
import * as Styled from './styled'
import type { CardProps } from './types'
import { TaskState } from 'store/slices/task'
import getTaskById from 'supabase/actions/getTaskById'
import Tags from './Tags'

export const Card = ({ id, ...snapshot }: CardProps) => {
  const [task, setTask] = React.useState<TaskState | null>(null)

  React.useEffect(() => {
    getTaskById(id).then(({ data }) => data && setTask(data))
  }, [id])

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
