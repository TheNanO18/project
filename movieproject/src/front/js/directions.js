import React, { Component } from "react";
import { Link } from "react-router-dom";
import directionsCs from "../css/directions.scss";
import Header from "../js/commonHeaders";
import Footer from "../js/footer";

export default class Directions extends Component {
    componentDidMount() {
        this.kakaoMap();
    }

    kakaoMap() {
        const { kakao } = window;
        if (kakao && kakao.maps) {
            let element = document.getElementById('map');
            let options = {
                center: new kakao.maps.LatLng(36.784874798881035, 126.14038063506534),
                level: 3
            };
            let map = new kakao.maps.Map(element, options);
        }
    }

    render() {
        return (
            <div className="directionsBk">
                <Header />
                <nav>
                    <h1>오시는길</h1>
                    <div className="kakaoMap" id="map" ></div>
                </nav>
                <Footer />
            </div>
        )
    }
}
