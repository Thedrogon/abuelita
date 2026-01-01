import React from 'react'
import Landing from '../src/pages/Landing'
import { BrowserRouter, Routes, Route } from "react-router";


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
  )
}

export default App
