import * as React from 'react'
import Board from 'components/core/Board'
import { Navigate, useParams } from 'react-router-dom'
import { BoardObject } from 'types/store'
import { RoutePath } from 'types/router'

export const View = () => {
  const { id } = useParams<Pick<BoardObject, 'id'>>()

  if (id === undefined) {
    return <Navigate to={RoutePath.HOME} />
  }

  return <Board id={id} />
}
