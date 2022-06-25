import { useState } from 'react'
import { Nav } from './components/Nav/Nav'
import { DonderList } from './components/Main/DonderList'
import { Route, Routes } from 'react-router-dom'
import { DonderRegist } from './page/DonderRegist'



import './App.css'

const App = ()=> {
  return(
    <>  
      <Nav/>
      <Routes>
      <Route path="/" element={<DonderList />}/>
      <Route path="/donderRegist" element={<DonderRegist />}/>
      </Routes>

      

    </>
  )
}

export default App
