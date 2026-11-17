import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import CartProvider from "../context/CartProvider"

const Layout = () => {
  return (
    <>
    <CartProvider>
    <Navbar/>
    <hr />
    <Outlet/>
    </CartProvider>
    </>
  )
}

export default Layout