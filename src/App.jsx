import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Home from "./Page/Home"
import Layout from "./Components/Layout"


const Router = createBrowserRouter([
  {
    path : 'login',
    element : <Login/>
  },
  {
    path : 'Register',
    element : <Register/>
  },
  {
    path : '/',
    element : <Layout/>,
    children: [
      {
        path : '/',
        element : <Home/>
      }
    ]
  }
])




const App = () => {
  return (
    <>
    <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App