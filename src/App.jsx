import React from 'react'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, Link} from "react-router-dom";
import Home from './Pages/Home';
import Video from './Pages/Video';
import Freinds from './Pages/Freinds';
import Shoping from './Pages/Shoping';
import Notification from './Pages/Notification';
import Profile from './Pages/Profile';
import Layout from './Layouts/Layout';
import Registration from './Pages/Registration';
import Login from './Pages/Login';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route  path="/home" element={< Home/>}> </Route>
        <Route  path="/video" element={< Video/>}> </Route>
        <Route  path="/freinds" element={< Freinds/>}> </Route>
        <Route  path="/shoping" element={< Shoping/>}> </Route>
        <Route  path="/notification" element={< Notification/>}> </Route>
        <Route  path="/profile" element={< Profile/>}> </Route>
        <Route  path='/registration' element={<Registration/>}></Route>
        <Route  path='/' element={<Login/>}></Route>
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
