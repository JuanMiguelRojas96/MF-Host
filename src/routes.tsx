import React from "react";
import HomeIcon from './UI-Components/assets/icons/home.svg'
import AdmonIcon from './UI-Components/assets/icons/admon.svg'

export const appRoutes = [
  {
    path: '/',
    icon: HomeIcon,
    name: 'Home' // Opcional, podría usarse para tooltips
  },
  {
    path: '/admon',
    icon: AdmonIcon,
    name: 'Admon'
  }
]

export const Admon = React.lazy(() => import('remoteAdmon/Admon'));