import React,{ Component } from "react";
import  {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./front/main";
import Theater from "./front/js/thtrIntrd"; 
import ScrnnInfrm from "./front/js/scrnnInfrm";
import Directions from "./front/js/directions";
import SrvcCntr from "./front/js/srvcCntr";
import PreOrder from "./front/js/preOrder";

export default  class App extends Component {
  render(){
    return(
      <Router>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/thtrIntrd" element={<Theater/>}/>
            <Route path="/scrnnInfrm" element={<ScrnnInfrm/>}/>
            <Route path="/directions" element={<Directions/>}/>
            <Route path="/srvcCntr" element={<SrvcCntr/>}/>
            <Route path="/preOrder" element={<PreOrder/>}/>
          </Routes>
      </Router>
    );
  }
}
