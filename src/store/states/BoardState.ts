import supabase from 'supabase'
import { makeAutoObservable } from 'mobx'
import { BoardObject, ColumnObject, TaskObject } from 'types/store'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

export class BoardState {
  public board: BoardObject | null = null
  public columns: ColumnObject[] = []
  public tasks: TaskObject[] = []
  public loading = false

  constructor() {
    makeAutoObservable(this)
  }

  public async fetch(
    id: BoardObject['id'],
  ): Promise<PostgrestSingleResponse<BoardObject>> {
    this.loading = true

    const response = await supabase
      .from('Boards')
      .select('*')
      .match({ id })
      .single()

    if (response.data) {
      this.board = response.data
      this.loading = false
    }

    return response
  }

  public async getColumns() {
    this.loading = true

    if (this.board === null) {
      throw new Error('Board not found!')
    }

    const response = await supabase
      .from('Columns')
      .select('*')
      .in('id', this.board.columns)

    if (response.data) {
      this.columns = response.data
      this.loading = false
    }

    return response
  }

  public async getTasks() {
    this.loading = true

    if (this.board === null) {
      throw new Error('Board not found!')
    }

    const response = await supabase
      .from('Tasks')
      .select('*')
      .in('column', this.board.columns)

    if (response.data) {
      this.tasks = response.data
      this.loading = false
    }

    return response
  }
}
