import * as React from 'react'
import { useForm } from 'react-hook-form'
import Field from 'components/common/Field'
import Input from 'components/common/Input'
import { useSignUpContext } from 'components/forms/Auth/SignUp'
import Button, { ButtonScale, ButtonVariant } from 'components/common/Button'
import { Styled } from 'components/forms/Auth'
import { Values } from './types'

export const Initial = () => {
  const {
    stageState: [stage, setStage],
    userState: [user, setUser],
  } = useSignUpContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    defaultValues: {
      email: user?.email || '',
      password: user?.email || '',
    },
  })

  const onSubmit = (values: Values) => {
    setUser(values)
    setStage(stage + 1)
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Title>Sign Up</Styled.Title>
      <Styled.Subtitle>
        Create an account and get 1 free project for you and your team. 🔥
      </Styled.Subtitle>
      <Styled.Content>
        <Styled.Row>
          <Field label="Email:" error={errors?.email}>
            <Input
              {...register('email')}
              type="email"
              placeholder="Enter your email"
            />
          </Field>
        </Styled.Row>
        <Styled.Row>
          <Field label="Password:" error={errors?.password}>
            <Input
              {...register('password')}
              type="password"
              placeholder="Enter your password"
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
          Create account
        </Button>
        <Styled.Message>
          On submit the form, you accept the{' '}
          <a href="#">Terms of the User Agreement</a> and{' '}
          <a href="#">Privacy Policy</a>
        </Styled.Message>
      </Styled.Footer>
    </Styled.Form>
  )
}
