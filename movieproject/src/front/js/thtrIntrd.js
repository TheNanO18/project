import React,{Component} from "react";
import {link} from "react-router-dom";
import thtrIntrdCs from "../css/thtrIntrd.scss"
import Header from "./commonHeaders";
import Footer from "./footer";

export default class ThtrIntrd extends Component{
    render(){
        return(
            <div className="thtrlntrdBk">
                <Header/>
                <nav>
                    <h1 class="movieTitle">극장소개 &자리 배치도</h1>
                    <div className="carParking">
                    </div>
                </nav>
                <Footer/>
            </div>
        );
    }
}