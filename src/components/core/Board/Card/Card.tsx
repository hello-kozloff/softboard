import * as React from 'react'
import * as Styled from './styled'
import type { CardProps } from './types'
import { TaskState } from 'store/slices/task'
import getTaskById from 'supabase/actions/getTaskById'

export const Card = ({ id }: CardProps) => {
  const [task, setTask] = React.useState<TaskState | null>(null)

  React.useEffect(() => {
    getTaskById(id).then(({ data }) => data && setTask(data))
  }, [id])

  if (task === null) {
    return <span>Loading task...</span>
  }

  return (
    <Styled.Card>
      <Styled.Name>{task.name}</Styled.Name>
    </Styled.Card>
  )
}
