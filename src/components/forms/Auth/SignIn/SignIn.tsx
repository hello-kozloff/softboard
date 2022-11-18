import * as React from 'react'
import * as Styled from '../styled'
import phrases from './phrases'
import Field from 'components/common/Field'
import Input from 'components/common/Input'
import Button, { ButtonScale, ButtonVariant } from 'components/common/Button'

export const SignIn = () => {
  return (
    <Styled.Form>
      <Styled.Title>Sign In</Styled.Title>
      <Styled.Subtitle>
        {phrases[Math.floor(Math.random() * phrases.length)]}
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
