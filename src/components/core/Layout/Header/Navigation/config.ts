import { RoutePath } from 'types/router'

const config = {
  public: [],
  protected: [
    {
      to: RoutePath.PROJECTS,
      children: 'Projects',
    },
    {
      to: RoutePath.SETTINGS,
      children: 'Settings',
    },
  ],
}

export default config
