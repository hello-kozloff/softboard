import supabase from 'supabase/index'
import { makeAutoObservable } from 'mobx'
import { BoardObject } from 'types/store'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

export class BoardState {
  public board: BoardObject | null = null

  constructor() {
    makeAutoObservable(this)
  }

  public async getById(
    id: BoardObject['id'],
  ): Promise<PostgrestSingleResponse<BoardObject>> {
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
