export enum RoutePath {
  DASHBOARD_PATH = '/',
  AUTH_SIGN_IN = '/auth/sign-in',
  AUTH_SIGN_UP = '/auth/sign-up',
  SETTINGS_PATH = '/settings',
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
