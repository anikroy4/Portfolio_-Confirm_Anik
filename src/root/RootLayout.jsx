import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../pages/header/Header'
import Footer from '../pages/footer/Footer'
import SocialBar from '../components/SocialBar'
import SiteBanner from '../components/SiteBanner'

export default function RootLayout() {
  return (
    <>
      <Header />
      {/* <SiteBanner /> */}
      <SocialBar />
      <Outlet />
      <Footer />
    </>
  )
}
