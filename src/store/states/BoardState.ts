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

  public init(id: BoardObject['id']) {
    this.fetch(id).then(() => this.getColumns().then(() => this.getTasks()))
  }

  private async fetch(
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

  private async getColumns() {
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

  private async getTasks() {
    if (this.board === null) return
    this.loading = true

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

  public reorderColumns(indexFrom: number, indexTo: number) {
    if (this.board === null) return

    const columns = Array.from(this.board.columns)
    const [removed] = columns.splice(indexFrom, 1)
    columns.splice(indexTo, 0, removed)

    this.board = {
      ...this.board,
      columns,
    }
  }

  public moveTask(
    taskId: TaskObject['id'],
    columnFrom: ColumnObject['id'],
    columnTo: ColumnObject['id'],
    indexFrom: number,
    indexTo: number,
  ) {
    const from = this.columns.find((column) => column.id === columnFrom)
    const to = this.columns.find((column) => column.id === columnTo)
    if (!from || !to) return

    const fromIndex = this.columns.indexOf(from)
    const toIndex = this.columns.indexOf(to)

    // * Inside column task movement
    if (columnFrom === columnTo) {
      const columnIndex = this.columns.indexOf(from)
      const column = this.columns[columnIndex]
      if (!column) return

      const [removed] = column.tasks.splice(indexFrom, 1)
      removed && column.tasks.splice(indexTo, 0, removed)
    }

    // * Outside column task movement
    const [removed] = this.columns[fromIndex].tasks.splice(indexFrom, 1)
    removed && this.columns[toIndex].tasks.splice(indexTo, 0, removed)
  }
}
