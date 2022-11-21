import * as React from 'react'
import Board from 'components/core/Board'
import { Navigate, useParams } from 'react-router-dom'
import { BoardState } from 'store/slices/board'
import { RoutePath } from 'types/router'

export const View = () => {
  const { id } = useParams<Pick<BoardState, 'id'>>()

  if (id === undefined) {
    return <Navigate to={RoutePath.HOME} />
  }

  return <Board id={id} />
}
