import * as React from 'react'
import { FieldError } from 'react-hook-form'

export interface FieldProps extends React.PropsWithChildren {
  label?: string
  error?: string | FieldError
}
