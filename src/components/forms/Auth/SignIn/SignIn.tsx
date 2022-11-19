import * as React from 'react'
import * as Styled from '../styled'
import phrases from './phrases'
import Field from 'components/common/Field'
import Input from 'components/common/Input'
import Button, { ButtonScale, ButtonVariant } from 'components/common/Button'
import { useForm } from 'react-hook-form'
import { UserAction } from 'store/slices/user'
import { useDispatch } from 'react-redux'
import { Values } from './types'

const phrase = phrases[Math.floor(Math.random() * phrases.length)]

export const SignIn = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: Values) =>
    dispatch(
      UserAction.store({
        id: '1',
        email: values.email,
        emailVerifyAt: null,
        firstName: 'Stew',
        lastName: 'Jobs',
        position: 'Frontend Developer',
        avatar: null,
      }),
    )

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Title>Sign In</Styled.Title>
      <Styled.Subtitle>{phrase}</Styled.Subtitle>
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
          Log in
        </Button>
        <Button
          type="submit"
          variant={ButtonVariant.Secondary}
          scale={ButtonScale.ExtraLarge}
        >
          Forgot password?
        </Button>
      </Styled.Footer>
    </Styled.Form>
  )
}
