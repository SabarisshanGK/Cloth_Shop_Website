import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@layouts/layout'
import { Home } from '@Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
