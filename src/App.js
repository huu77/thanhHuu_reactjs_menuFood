import React from "react";
import { Fragment } from "react";
import defautLayout from "./compoment/index";
import styles from "./App.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {PulichRouter} from '../src/router/index';

function App() {
  const cx = classNames.bind(styles);

  return (
    <Router>
      <div className={cx("App")}>
     
        <Routes>
        {PulichRouter.map((route,index)=>{
          const Layout =route.layout === null? Fragment: defautLayout ;
          const Page=route.component;
        return <Route key={index} path={route.path} element={
        <Layout>
        <Page/>
        </Layout>
        }/>
        }
          
        )}
      
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
