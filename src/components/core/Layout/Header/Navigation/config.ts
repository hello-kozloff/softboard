import { RoutePath } from 'types/router'

const config = {
  public: [],
  protected: [
    {
      to: RoutePath.DASHBOARD,
      children: 'Dashboard',
    },
    {
      to: RoutePath.PROJECTS,
      children: 'Projects',
    },
    {
      to: RoutePath.BOARDS,
      children: 'Boards',
    },
    {
      to: RoutePath.TASKS,
      children: 'Tasks',
    },
    {
      to: RoutePath.TEAMS,
      children: 'Teams',
    },
  ],
}

export default config
