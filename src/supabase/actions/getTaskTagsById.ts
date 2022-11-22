import { BoardState } from 'store/slices/board'
import supabase from 'supabase'

const getTaskTagsById = async (id: BoardState['id']) => {
  return supabase.from('Tags').select('*').eq('board_id', id)
}

export default getTaskTagsById
