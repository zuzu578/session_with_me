import { useState, useEffect } from 'react';
import { Nav } from './components/Nav/Nav'
import { DonderList } from './components/Main/DonderList'
import { Route, Routes } from 'react-router-dom'
import { DonderRegist } from './page/DonderRegist'
import { getCookie } from "./utils/cookie";
import './App.css'

const App = ()=> {
  useEffect(()=>{
  
  },[])
  return(
    <>  
      <Nav/>
      <Routes>
      <Route path="/" element={<DonderList props = {getCookie('account')}/>}/>
      <Route path="/donderRegist" element={<DonderRegist />}/>
      </Routes>

      

    </>
  )
}

export default App
