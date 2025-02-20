import { HomeLayoutComponent } from '@/module/home/ui/layouts/home-layout';
import React from 'react'

interface LayoutProps{
    children: React.ReactNode
}

const HomeLayout = ({children} : LayoutProps) => {
  return (
    <HomeLayoutComponent>{children}</HomeLayoutComponent>
  )
}

export default HomeLayout