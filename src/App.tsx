
import './App.css'
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify'
import TaskModalProvider from './context/TaskModal'
import NotesProvider from './context/Notes'
import ProtectedRoutes from './components/ProtectedRoutes'
import InverseRoutes from './components/InverseRoutes'
import MidScreenProvider from './context/mdScreen'

function App() {
  let routes=createHashRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<ProtectedRoutes><Home/></ProtectedRoutes>},
     
    ]},
    {path:'/login',element:<InverseRoutes><Login/></InverseRoutes>},
    {path:'/signup',element:<InverseRoutes><Signup/></InverseRoutes>},

  ])
  return (
    <>
    <MidScreenProvider >
    <NotesProvider>
      <TaskModalProvider>
        
      <RouterProvider router={routes}>

      </RouterProvider>
      <ToastContainer />
    </TaskModalProvider>
    </NotesProvider>

    </MidScreenProvider>
   
    
      
    </>
  )
}

export default App
