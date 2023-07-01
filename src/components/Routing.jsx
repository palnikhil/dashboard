import React from 'react';
import {  Route, Routes } from "react-router-dom";
import Layout from './layout/layout';
import Front from '../pages/Front';
import GamePortal from '../pages/GamePortal';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routing = () => {
  return (
    <Routes>
      {/* <Route path = "front" element={<Front/>} /> */}
      <Route path = "/" element={<Layout />} />
      <Route path = "login" element={<Login/>} />
      <Route path = "register" element={<Register/>} />
    </Routes>
  );
};

export default Routing;
