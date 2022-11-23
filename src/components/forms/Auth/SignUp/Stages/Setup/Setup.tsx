import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Styled } from 'components/forms/Auth'
import { useSignUpContext } from 'components/forms/Auth/SignUp'
import Field from 'components/common/Field'
import Input from 'components/common/Input'
import Button, { ButtonScale, ButtonVariant } from 'components/common/Button'
import useUser from 'hooks/useUser'
import { UserObject } from 'types/store'
import { RoutePath } from 'types/router'
import { Values } from './types'

export const Setup = () => {
  const UserState = useUser()
  const navigate = useNavigate()

  const {
    userState: [user],
  } = useSignUpContext()

  const { register, handleSubmit } = useForm<Values>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })

  const onSubmit = (values: Values) => {
    user &&
      UserState.singIn({
        ...user,
        id: '1',
        email: user.email,
        emailVerifyAt: new Date(),
        firstName: values.firstName,
        lastName: values.lastName,
        position: values.position,
        avatar: null,
      } as UserObject).then(() => navigate(RoutePath.HOME))
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Title>Let&apos;s get acquainted?</Styled.Title>
      <Styled.Subtitle>
        Customize your profile to express yourself!
      </Styled.Subtitle>
      <Styled.Content>
        <Styled.Row>
          <Field label="First name*:">
            <Input
              {...register('firstName')}
              type="text"
              placeholder="Enter first name"
            />
          </Field>
          <Field label="Last name*:">
            <Input
              {...register('lastName')}
              type="text"
              placeholder="Enter last name"
            />
          </Field>
        </Styled.Row>
        <Styled.Row>
          <Field label="Position:">
            <Input
              {...register('position')}
              type="text"
              placeholder="What are you working on"
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
          Save
        </Button>
      </Styled.Footer>
    </Styled.Form>
  )
}
