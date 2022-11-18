import * as pages from 'pages'
import { CustomRoute, RoutePath } from 'types/router'

export const routes: CustomRoute[] = [
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
    path: RoutePath.AUTH_LOGOUT,
    page: pages.Logout,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.BOARDS,
    page: pages.Boards,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.DASHBOARD,
    page: pages.Dashboard,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.PROFILE,
    page: pages.Profile,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.PROJECTS,
    page: pages.Projects,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.SETTINGS,
    page: pages.Settings,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.TASKS,
    page: pages.Tasks,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.TEAMS,
    page: pages.Teams,
    extra: {
      guard: {
        auth: true,
      },
    },
  },
  {
    path: RoutePath.NOT_FOUND,
    page: pages.Redirect,
  },
]
