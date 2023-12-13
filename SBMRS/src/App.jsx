/* eslint-disable no-unused-vars */

import { SkeletonTheme } from "react-loading-skeleton";
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import TV from "./pages/TV";
import MovieDetails from "./pages/MovieDetails";

const router = createBrowserRouter([
  {path: '/' ,
   element : <Navbar />,
   children : [
    {path: '/' , element : <Home />},
    {path: '/movies' , element : <Movies />},
    {path: '/tv' , element : <TV />},
    {path: '/movies/id' , element : <MovieDetails />},
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
