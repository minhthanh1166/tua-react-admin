import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route  exact path="/" element={<Dashboard/>}></Route>
        <Route  path="/customers" element={<Customers/>}></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default Router
