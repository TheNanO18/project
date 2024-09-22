import React, { Component } from "react";
import { Link } from "react-router-dom";
import footerCs from "../css/footer.scss";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,  // 현재 표시할 항목의 인덱스
            testList: [
                { id: 1, text: "이번주는 장마로 인해 극장을 오픈 하지 않습니다." },
                { id: 2, text: "자동차 극장 이용안내" },
                { id: 3, text: "극장 이용시 주의 사항 안내" }
            ]
        };
    }

    componentDidMount() {
        // 2초 간격으로 currentIndex를 증가시켜 다음 항목을 표시
        this.intervalId = setInterval(() => {
            this.setState(prevState => {
                if (prevState.currentIndex < prevState.testList.length - 1) {
                    return { currentIndex: prevState.currentIndex + 1 };
                } else {
                    return { currentIndex: 0 }; // 마지막 항목 이후에는 다시 첫 항목으로 돌아감
                }
            });
        }, 2000); // 2초 간격으로 업데이트
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트될 때 interval을 정리
        clearInterval(this.intervalId);
    }

    render() {
        const { currentIndex, testList } = this.state;
        return (
            <footer>
                <div className="bsnsInfrm">
                    <div className="bsnsInfrmImage"></div>
                    <div className="Info">
                        <Link to="tel:010-4134-9069">전화번호 : 010-4134-9069</Link>
                        <Link to="mailto:rlawotjs158@naver.com">이메일 : rlawotjs158@naver.com</Link>
                        <span>주소 : 충청남도 태안군 소원면 모항리 / 대표자 : 김재선</span>
                    </div>
                </div>
                <div className="notice">
                    <h2>공지사항</h2>
                    <div className="notice_box">
                        <ul>
                            <li key={testList[currentIndex].id}>
                                {testList[currentIndex].text}
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
