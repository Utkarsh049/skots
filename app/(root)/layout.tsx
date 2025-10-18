import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-screen text-gray-400 no-scrollbar overflow-y-auto'>
      <div className='container py-10'>
        {children}
      </div>
    </main>
  )
}

export default Layout