import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import Error from '@/components/error/index'

import Home from '@/pages/home/index'
import Me from '@/pages/me/index'
import Production from '@/pages/production/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/me',
        element: <Me />
      },
      {
        path: '/production',
        element: <Production />
      }
    ]
  }
])

export default router
