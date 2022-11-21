import * as pages from 'pages'
import Layout, { HeaderVariant } from 'components/core/Layout'
import { CustomRoute, RoutePath } from 'types/router'

export const routes: CustomRoute[] = [
  {
    path: RoutePath.AUTH_SIGN_IN,
    page: pages.SignIn,
    extra: {
      layout: {
        header: <Layout.Header variant={HeaderVariant.Transparent} />,
      },
      guard: {
        auth: false,
      },
    },
  },
  {
    path: RoutePath.AUTH_SIGN_UP,
    page: pages.SignUp,
    extra: {
      layout: {
        header: <Layout.Header variant={HeaderVariant.Transparent} />,
      },
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
    path: RoutePath.BOARD_VIEW,
    page: pages.Board,
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
