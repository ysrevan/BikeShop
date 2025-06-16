import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Faq from './pages/Faq'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import About from './pages/About'
import Home from './pages/Home'
import Layout from './components/layout/Layout'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
        {
        path: "/contact",
        element: <Contact />
      },

        {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/faq",
        element: <Faq />
      },
    ]
}])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App