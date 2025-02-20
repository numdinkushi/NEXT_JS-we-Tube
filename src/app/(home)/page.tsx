import { Button } from '@/components/ui/button';
import { appLogo } from '@/constants/images';
import Image from 'next/image';
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <Image src={appLogo} height={50} width={50} alt='logo' />
    <p className='text-xl font-semibold tracking-tight' >WeTube</p>
    </div>
  )
}

export default Home