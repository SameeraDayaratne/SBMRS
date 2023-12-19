/* eslint-disable no-unused-vars */

import { SkeletonTheme } from "react-loading-skeleton";
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import TV from "./pages/TV";
import MovieDetails from "./pages/MovieDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {path: '/' ,
   element : <Navbar />,
   children : [
    {path: '/' , element : <Home />},
    {path: '/movies' , element : <Movies />},
    {path: '/tv' , element : <TV />},
    {path: '/movies/id' , element : <MovieDetails />},
    {path: '/signup' , element : <SignUp />},
    {path: '/login' , element : <Login />},
   ]
  }
 
])


function App() {
  

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <RouterProvider router={router}>

      </RouterProvider>
    
  </SkeletonTheme>
  )
}

export default App
