import * as React from 'react'

export enum ButtonVariant {
  Primary,
  Secondary,
}

export enum ButtonScale {
  Medium,
  ExtraLarge,
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  scale?: ButtonScale
}
