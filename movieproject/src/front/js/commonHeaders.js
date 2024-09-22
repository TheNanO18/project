import React from "react";
import {Link} from "react-router-dom";
import headercs from "../css/commonHeaders.scss";

const Header = () =>{
    return(
        <header>
            <div className="logo">
                <Link to="/" className="logoImage"></Link>
                {/* <button className="register">로그인/회원가입</button> */}
            </div>
            <ul>
                <li className="thtrIntrd">
                    <Link to="/thtrIntrd">극장소개</Link>
                </li>
                <li className="scrnnInfrm">
                    <Link to="/scrnnInfrm">상영안내</Link>
                </li>
                <li className="directions">
                    <Link to="/directions">오시는길</Link>
                </li>
                <li className="srvcCntr">
                    <Link to="/srvcCntr">고객센터</Link>
                </li>
                <li className="preOrder">
                    <Link to="/preOrder">상영시간</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header