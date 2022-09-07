//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
import {Home} from "./component/home.jsx";
import {Principal1} from "./component/home.jsx";
import {Cards} from "./component/home.jsx";
import {Footer} from "./component/home.jsx";

function App() {
    return (
       <div>
        <Home/>,
        <Principal1/>,
        
        <Footer/>
        </div>
    );
  }
ReactDOM.render(<App/>, document.querySelector("#app"));



// <Cards/>,