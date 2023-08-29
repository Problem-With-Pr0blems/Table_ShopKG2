import React, { Suspense } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Loader from '../Ui/Loader/Loader'


const Layout = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
    </>
  )
}

export default Layout