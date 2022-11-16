import { Dashboard, Settings, SignIn, SignUp } from 'pages'
import * as paths from 'constants/router'

export const routes = [
  {
    path: paths.DASHBOARD_PATH,
    element: Dashboard,
    protected: true,
  },
  {
    path: paths.SETTINGS_PATH,
    element: Settings,
    protected: true,
  },
  {
    path: paths.AUTH_SIGN_IN,
    element: SignIn,
  },
  {
    path: paths.AUTH_SIGN_UP,
    element: SignUp,
  },
]
