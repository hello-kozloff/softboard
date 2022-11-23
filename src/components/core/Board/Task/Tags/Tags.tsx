import * as React from 'react'
import * as Styled from './styled'
import Tag from 'components/common/Tag'
import { TagObject } from 'types/store'
import { useBoardContext } from '../../BoardContext'

export const Tags = () => {
  const { id } = useBoardContext()
  const [tags, setTags] = React.useState<TagObject[]>([])

  return (
    <Styled.Tags>
      {tags.map((tag) => (
        <Tag key={tag.id} {...tag} />
      ))}
    </Styled.Tags>
  )
}
