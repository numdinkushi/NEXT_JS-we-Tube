import React from 'react'

interface AuthLayoutProps{
    children: React.ReactNode,
}
const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <div className='min-h-screen items-center flex justify-center'>{children}</div>
  )
}

export default AuthLayout