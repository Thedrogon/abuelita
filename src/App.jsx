import React from 'react'
import Landing from '../src/pages/Landing'
import { BrowserRouter, Routes, Route } from "react-router";
import PizzaMenuPage from './components/PizzaMenu/PizzaMenuPage';


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/pizzamenu' element={<PizzaMenuPage/>}/>
      </Routes>
  )
}

export default App
