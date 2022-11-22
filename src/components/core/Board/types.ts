import { BoardState } from 'store/slices/board/types'

export type ContextPayload = BoardState

export type BoardProps = Pick<BoardState, 'id'>
