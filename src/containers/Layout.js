import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }) => {
 return (
  <>
  <Header />
   <div className='container-fluid'>
    <Outlet />
   </div>
   {/* <Footer /> */}
  </>
 )
}

export default Layout