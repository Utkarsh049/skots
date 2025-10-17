import React from 'react'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
const Home = () => {
  return (
    <>
    <Header />
    <div className='flex min-h-screen'>
      <Button variant="outline">Get Started</Button>
    </div>
    </>
  )
}

export default Home