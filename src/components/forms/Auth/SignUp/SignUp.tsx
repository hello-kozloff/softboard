import * as React from 'react'
import * as Stages from './Stages'
import { SignUpContext } from './SignUpContext'
import { ContextPayload, SignUpStage } from './types'
import { UserValues } from 'components/forms/Auth'

export const SignUp = () => {
  const userState = React.useState<Partial<UserValues> | null>(null)
  const stageState = React.useState<SignUpStage>(0)
  const stage = stageState[0]

  const context: ContextPayload = {
    userState,
    stageState,
  }

  const Stage = React.useCallback(() => {
    switch (stage) {
      case SignUpStage.Initial:
        return <Stages.Initial />
      case SignUpStage.Confirm:
        return <Stages.Confirm />
      case SignUpStage.Setup:
        return <Stages.Setup />
    }
  }, [stage])

  return (
    <SignUpContext.Provider value={context}>
      <Stage />
    </SignUpContext.Provider>
  )
}
