import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import StoreCard from './components/StoreCard/StoreCard'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/:id' element={<StoreCard />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;
