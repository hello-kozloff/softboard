import * as React from 'react'
import * as Styled from '../styled'
import Field from 'components/common/Field'
import Input from 'components/common/Input'
import Button, { ButtonScale, ButtonVariant } from 'components/common/Button'

export const SignUp = () => {
  return (
    <Styled.Form>
      <Styled.Title>Sign Up</Styled.Title>
      <Styled.Subtitle>
        Create an account and get 1 free project for you and your team. 🔥
      </Styled.Subtitle>
      <Styled.Content>
        <Styled.Row>
          <Field label="Email:">
            <Input type="email" placeholder="Enter your email" />
          </Field>
        </Styled.Row>
        <Styled.Row>
          <Field label="Password:">
            <Input type="password" placeholder="Enter your password" />
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
