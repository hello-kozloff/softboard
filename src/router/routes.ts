import * as pages from 'pages'
import * as paths from 'constants/router'

export const routes = [
  {
    path: paths.DASHBOARD_PATH,
    element: pages.Dashboard,
    protected: true,
  },
  {
    path: paths.SETTINGS_PATH,
    element: pages.Settings,
    protected: true,
  },
  {
    path: paths.AUTH_SIGN_IN,
    element: pages.SignIn,
  },
  {
    path: paths.AUTH_SIGN_UP,
    element: pages.SignUp,
  },
  {
    path: '*',
    element: pages.Redirect,
  },
]
