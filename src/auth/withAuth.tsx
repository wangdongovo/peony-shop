import React from 'react'
import { Navigate } from 'react-router-dom'

interface AuthProps {
  isAuthenticated: boolean
  children: React.ReactNode
}

const withAuth = (WrappedComponent: React.ComponentType<AuthProps>) => {
  return class extends React.Component<AuthProps> {
    static defaultProps = {
      isAuthenticated: false
    }

    render() {
      const { isAuthenticated, children } = this.props

      if (!isAuthenticated) {
        return <Navigate to="/login" />
      }

      return <WrappedComponent {...this.props}>{children}</WrappedComponent>
    }
  }
}

export default withAuth
