import { BoardState } from 'store/slices/board/types'
import supabase from 'supabase'

const getBoardById = async (id: BoardState['id']) => {
  return await supabase.from('Boards').select('*').match({ id }).single()
}

export default getBoardById
