import supabase from 'supabase/index'
import { makeAutoObservable } from 'mobx'
import { BoardState } from 'types/store'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

export class BoardStore {
  public board: BoardState | null = null

  constructor() {
    makeAutoObservable(this)
  }

  public async getById(
    id: BoardState['id'],
  ): Promise<PostgrestSingleResponse<BoardState>> {
    const response = await supabase
      .from('Boards')
      .select('*')
      .match({ id })
      .single()

    if (response.data) {
      this.board = response.data
    }

    return response
  }
}
