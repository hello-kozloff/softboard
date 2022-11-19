import * as React from 'react'
import { UserValues } from '..'

export enum SignUpStage {
  Initial,
  Confirm,
  Setup,
}

export interface ContextPayload {
  stageState: [SignUpStage, React.Dispatch<React.SetStateAction<SignUpStage>>]
  userState: [
    Partial<UserValues> | null,
    React.Dispatch<React.SetStateAction<Partial<UserValues> | null>>,
  ]
}
