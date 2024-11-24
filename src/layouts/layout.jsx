import { Outlet } from 'react-router-dom';
import {NavBar,Footer} from '@components'

const Layout = () => {
  return (
    <>
        <NavBar/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout