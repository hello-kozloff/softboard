import * as pages from 'pages'
import { CustomRoute, RoutePath } from 'types/router'

export const routes: CustomRoute[] = [
  {
    path: RoutePath.DASHBOARD_PATH,
    page: pages.Dashboard,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.SETTINGS_PATH,
    page: pages.Settings,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.AUTH_SIGN_IN,
    page: pages.SignIn,
    extra: {
      guard: {
        auth: false,
      },
    },
  },
  {
    path: RoutePath.AUTH_SIGN_UP,
    page: pages.SignUp,
    extra: {
      guard: {
        auth: false,
      },
    },
  },
  {
    path: RoutePath.NOT_FOUND,
    page: pages.Redirect,
  },
]
