import React from "react";
import Navbar from "./compoment/navbar";
import Footer from "./compoment/footer";
import Login from "./compoment/login";
import styles from "./App.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compoment/page/home";
import Menu from "./compoment/page/menu";
import About from "./compoment/page/about";
import Contact from "./compoment/page/contact";
import Info from "./compoment/page/info";
import MenuChild from "./compoment/page/menuChild";
import ERR from "./compoment/page/404";

import {useState} from 'react';
function App() {
  const cx = classNames.bind(styles);
const [login,setLogin]=useState(false);
  return (
    <Router>
      <div className={cx("App")}>
        <Navbar />
        <Routes>
        <Route path="/" element={!login && <Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:slug" element={<MenuChild />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<ERR />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
