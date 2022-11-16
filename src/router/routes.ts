import { Dashboard, Settings, SignIn, SignUp } from 'pages'
import * as paths from 'constants/router'

export const routes = [
  {
    path: paths.DASHBOARD_PATH,
    component: Dashboard,
  },
  {
    path: paths.SETTINGS_PATH,
    component: Settings,
  },
  {
    path: paths.AUTH_SIGN_IN,
    component: SignIn,
  },
  {
    path: paths.AUTH_SIGN_UP,
    component: SignUp,
  },
]
