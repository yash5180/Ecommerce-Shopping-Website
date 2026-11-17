import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout';
import Home from "./pages/Home";
import Products from  "./pages/Products";
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            },
            {
            path:"products/:id",
            element:<ProductDetails/>
            }
        ]
    },
]);
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
