
import "./firebase/firebase"
import './App.css'


import {createBrowserRouter,createRoutesFromChildren,Route,RouterProvider} from "react-router-dom"

import Welcome from './components/Welcome.jsx'
import Form from './components/Form.jsx'
import Login from './components/Login'
function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/'>  
        <Route path="" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
  </Route>
    )
  )
 
  return (
    <div className='App flex justify-center items-center'>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
