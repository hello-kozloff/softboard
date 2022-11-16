import { Dashboard, Settings } from 'pages'
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
]
