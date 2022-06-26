import { useState, useEffect } from 'react';
import { Nav } from './components/Nav/Nav'
import { DonderList } from './components/Main/DonderList'
import { Route, Routes } from 'react-router-dom'
import { Login } from './page/LoginPage'
import { getCookie } from "./utils/cookie";
import { DonderRegist } from './page/DonderRegist';
import './App.css'

const App = ()=> {
  useEffect(()=>{
  
  },[])
  return(
    <>  
      <Nav/>
      <Routes>
      <Route path="/" element={<DonderList props = {getCookie('account')}/>}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/DonderRegist" element={<DonderRegist props = {getCookie('account')}/>}/>
      
      </Routes>

      

    </>
  )
}

export default App
