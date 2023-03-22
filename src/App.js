import React from "react";
// import zoro from "./zoro.png"
import "./App.css";

const App = () => {
    return (
        <div className="mainDiv">
            <div className="navBar">
            {/* <img src={zoro} className="pic" alt="zoro pic"/> */}
            <div className="title"><h3>RORONOA ZORO</h3></div>
              <nav>
              <a href="#">HOME</a>
              <a href="#">ABOUT</a>
              <a href="#">HIGLIGHTS</a>
              </nav>
            </div>
         
            
        </div>
    )
}

export default App;