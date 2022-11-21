import { ColumnState } from 'store/slices/board/types'
import supabase from 'supabase'

const getColumnById = async (id: ColumnState['id']) => {
  return await supabase.from('Columns').select('*').match({ id }).single()
}

export default getColumnById
