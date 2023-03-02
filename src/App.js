import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import HeroBanner from "./HeroBanner";
import { Config } from "../Config";
import Editoral from "./Editoral";
import Editoral1 from "./Editoral1";
import Editoral2 from "./Editorial2";
import Event from "./Event"

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Card from "./Cards";
import Product from "./Product";
import About from "./About"

 const Layout=()=>{
  return(
    <>
    <Header/>
    <HeroBanner/>
    <Body/>
    <Editoral/>
    <Editoral1/>
    <Editoral2/>
    <Event/>
    <Footer/>
    </>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>
  },
  {
    path:"/card",
    element:<Card/>
  },
  {
    path:"/product",
    element:<Product/>
  },
  {
    path:"/about",
    element:<About/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
