export enum RoutePath {
  PROJECTS = '/',
  AUTH_SIGN_IN = '/auth/sign-in',
  AUTH_SIGN_UP = '/auth/sign-up',
  AUTH_LOGOUT = '/auth/logout',
  SETTINGS = '/settings',
  NOT_FOUND = '*',
}

export interface ExtraRouteProps {
  guard?: {
    auth?: boolean
  }
}

export interface CustomRoute {
  path: RoutePath
  page: () => JSX.Element
  extra?: ExtraRouteProps
}
