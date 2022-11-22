import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PageLogin from '../pages/login/PageLogin'

export const Router = () => {
  return (
   <Routes>
      <Route path="/" exact element={<PageLogin/>} />
   </Routes> 
  )
}
