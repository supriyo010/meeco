// filename -App.js

import React from "react";
import "./App.css";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./components/Navbar/Index";



function App() {
    return (
        <Router>
          <Navbar/>
           
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/path" element={<About/>} />
         
               
            </Routes>
        </Router>
    );
}

export default App;

