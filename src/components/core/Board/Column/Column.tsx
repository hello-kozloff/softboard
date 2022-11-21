import * as React from 'react'
import * as Styled from './styled'
import type { ColumnProps } from './types'
import getColumnById from 'supabase/actions/getColumnById'
import { ColumnState } from 'store/slices/board/types'
import Card from '../Card'

export const Column = ({ id }: ColumnProps) => {
  const [column, setColumn] = React.useState<ColumnState | null>(null)

  React.useEffect(() => {
    getColumnById(id).then(({ data }) => data && setColumn(data))
  }, [id])

  if (column === null) {
    return <span>Loading column...</span>
  }

  return (
    <Styled.Column>
      <Styled.Name>{column.name}</Styled.Name>
      {column.tasks.map((taskId) => (
        <Card key={taskId} id={taskId} />
      ))}
    </Styled.Column>
  )
}
