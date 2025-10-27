import React from 'react'
import './layout.css'
import MainNavigation from './MainNavigation'
const Layout = ({children}) => {
  return (
    <div>
        <MainNavigation />

        <main className='main'>
            {children}
        </main>
    </div>
  )
}

export default Layout