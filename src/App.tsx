import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Mens from "./Pages/Mens"
import Womens from "./Pages/Womens"
import Kids from "./Pages/Kids"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/> <Home/>  </>
    },
    {
      path: "/mens",
      element: <> <Navbar/> <Mens/>  </>
    },
    {
      path: "/womens",
      element: <> <Navbar/> <Womens/>  </>
    },
    {
      path: "/kids",
      element: <> <Navbar/> <Kids/>  </>
    },
    {
      path: "/login",
      element: <> <Navbar/> <Login/> </>
    },
    {
      path: "/cart",
      element: <> <Navbar/> <Cart/> </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
