import React from 'react'

import Nav from '@/components/nav/index'
import Main from '@/components/main/index'

import './index.less'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-container">
      <Nav />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
