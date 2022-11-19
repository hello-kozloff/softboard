export enum RoutePath {
  HOME = '/',
  AUTH_SIGN_IN = '/auth/sign-in',
  AUTH_SIGN_UP = '/auth/sign-up',
  AUTH_LOGOUT = '/auth/logout',
  DASHBOARD = '/',
  PROFILE = '/profile',
  PROJECTS = '/projects',
  SETTINGS = '/settings',
  TASKS = '/tasks',
  BOARDS = '/boards',
  BOARD = '/board/:id',
  TEAMS = '/teams',
  NOT_FOUND = '*',
}

export interface ExtraRouteProps {
  layout?: {
    header?: JSX.Element
    footer?: JSX.Element
  }
  guard?: {
    auth?: boolean
  }
}

export interface CustomRoute {
  path: RoutePath
  page: () => JSX.Element
  extra?: ExtraRouteProps
}
