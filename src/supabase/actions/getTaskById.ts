import { TaskState } from 'store/slices/task'
import supabase from 'supabase'

const getTaskById = async (id: TaskState['id']) => {
  return await supabase.from('Tasks').select('*').match({ id }).single()
}

export default getTaskById
