import Header from '@/components/Header'
import React, { Children } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default layout