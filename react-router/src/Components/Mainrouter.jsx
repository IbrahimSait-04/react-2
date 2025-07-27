import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Userlist from '../Pages/Userlist'
import View from '../Pages/View'

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Userlist />} />
        <Route>
            <Route path='/users' element={<Userlist />} />
            <Route path='/users/:id' element={<View />} />
        </Route>
      </Routes>
    </div>
  )
}

export default MainRouter
