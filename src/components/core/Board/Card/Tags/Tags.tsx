import * as React from 'react'
import * as Styled from './styled'
import Tag from 'components/common/Tag'
import { TagState } from 'store/slices/tag'
import getTaskTagsById from 'supabase/actions/getTaskTagsById'
import { useBoardContext } from '../../BoardContext'

export const Tags = () => {
  const { id } = useBoardContext()
  const [tags, setTags] = React.useState<TagState[]>([])

  console.log(tags)

  React.useEffect(() => {
    getTaskTagsById(id).then(({ data }) => data && setTags(data))
  }, [id])

  return (
    <Styled.Tags>
      {tags.map((tag) => (
        <Tag key={tag.id} {...tag} />
      ))}
    </Styled.Tags>
  )
}
