import React from 'react'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Link} from "react-router-dom";
import Home from './Pages/Home';
import Video from './Pages/Video';
import Freinds from './Pages/Freinds';
import Shoping from './Pages/Shoping';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile';
import Layout from './Layouts/Layout';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route  path="/" element={< Home/>}> </Route>
        <Route  path="/video" element={< Video/>}> </Route>
        <Route  path="/freinds" element={< Freinds/>}> </Route>
        <Route  path="/shoping" element={< Shoping/>}> </Route>
        <Route  path="/notification" element={< Notification/>}> </Route>
        <Route  path="/profile" element={< Profile/>}> </Route>

      </Route>
      )
  );
  



  return (
    <>
    <RouterProvider router={router}/>
    


    </>
  )
}

export default App
