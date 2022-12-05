import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Page404 } from '../pages/error404/Page404'
import PageLogin from '../pages/login/PageLogin'
import PagePublic from '../pages/public/PagePublic'
import { PageRegister } from '../pages/register/PageRegister'

export const Router = () => {
  return (
   <Routes>
      <Route path="/" exact element={<PagePublic/>} />
      <Route path="/login" exact element={<PageLogin/>} />  
      <Route path="/register" exact element={<PageRegister/>} />  
      <Route path="*" element={<Page404/>} /> 
   </Routes>  
  )
}
