import * as React from 'react'

export interface FieldProps extends React.PropsWithChildren {
  label?: string
  error?: string
}
