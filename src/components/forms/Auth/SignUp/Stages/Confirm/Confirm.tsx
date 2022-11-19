import * as React from 'react'
import { CustomSubtitle } from './styled'
import { useForm } from 'react-hook-form'
import Field from 'components/common/Field'
import Input from 'components/common/Input'
import { Styled } from 'components/forms/Auth'
import { useSignUpContext } from 'components/forms/Auth/SignUp'
import Button, { ButtonScale, ButtonVariant } from 'components/common/Button'
import { Values } from './types'

export const Confirm = () => {
  const {
    stageState: [stage, setStage],
    userState: [user],
  } = useSignUpContext()

  const { register, handleSubmit } = useForm<Values>({
    defaultValues: {
      code: '',
    },
  })

  const onSubmit = () => {
    setStage(stage + 1)
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Title>Confirm Email</Styled.Title>
      <CustomSubtitle>
        We send confirm code in email: <br />
        <span>{user?.email}</span>
      </CustomSubtitle>
      <Styled.Content>
        <Styled.Row>
          <Field label="Enter code:">
            <Input
              {...register('code')}
              type="email"
              placeholder="Enter code here"
            />
          </Field>
        </Styled.Row>
      </Styled.Content>
      <Styled.Footer>
        <Button
          type="submit"
          variant={ButtonVariant.Primary}
          scale={ButtonScale.ExtraLarge}
        >
          Next
        </Button>
        <Button
          type="button"
          variant={ButtonVariant.Secondary}
          scale={ButtonScale.ExtraLarge}
          onClick={() => setStage(stage - 1)}
        >
          Back
        </Button>
      </Styled.Footer>
    </Styled.Form>
  )
}
