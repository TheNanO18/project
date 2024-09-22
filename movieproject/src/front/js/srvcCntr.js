import React, { Component } from "react";
import { Link } from "react-router-dom";
import srvcCntrCs from "../css/srvcCntr.scss";
import Header from "../js/commonHeaders";
import Footer from "../js/footer";

export default class SrvcCntr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'Q&A',
            clickedLiId: null, // 클릭된 li의 ID를 추적하는 상태
            askList: [
                {
                    id: 1,
                    title: "첫 번째 질문",
                    date: "2024-07-01",
                    views: 150,
                    content: "첫 번째 질문에 대한 답변입니다."
                },
                {
                    id: 2,
                    title: "두 번째 질문",
                    date: "2024-07-02",
                    views: 200,
                    content: "두 번째 질문에 대한 답변입니다."
                },
                {
                    id: 3,
                    title: "세 번째 질문",
                    date: "2024-07-03",
                    views: 250,
                    content: "세 번째 질문에 대한 답변입니다."
                }
            ],
            noticeList: [
                {
                    id: 1,
                    title: "첫 번째 공지사항",
                    date: "2024-07-01",
                    views: 150,
                    content: "첫 번째 공지사항 내용입니다."
                },
                {
                    id: 2,
                    title: "두 번째 공지사항",
                    date: "2024-07-02",
                    views: 200,
                    content: "두 번째 공지사항 내용입니다."
                },
                {
                    id: 3,
                    title: "세 번째 공지사항",
                    date: "2024-07-03",
                    views: 250,
                    content: "세 번째 공지사항 내용입니다."
                }
            ]
        };
    }

    handleTabChange = (tab) => {
        // 객체 지향 currentTab에 값을 매개변수로 전달받음
        this.setState({ currentTab: tab, clickedLiId: null }); // 탭 변경 시 클릭된 항목 초기화
    };

    handleLiClick = (id) => {
        // 클릭된 li의 ID를 상태에 저장
        this.setState((prevState) => ({
            clickedLiId: prevState.clickedLiId === id ? null : id // 같은 li 클릭 시 닫힘
        }));
    };

    render() {
        const { currentTab, askList, noticeList, clickedLiId } = this.state;
        const listToShow = currentTab === 'Q&A' ? askList : noticeList; // currentTab에 따른 다른 값을 표출

        return (
            <div className="srvcCntrBk">
                <Header />
                <nav>
                    <div className="askHeader">
                        <span
                            className={`tab ${currentTab === 'Q&A' ? 'active' : ''}`}
                            onClick={() => this.handleTabChange('Q&A')}
                        >
                            Q&A
                        </span>
                        <span
                            className={`tab ${currentTab === 'matter' ? 'active' : ''}`}
                            onClick={() => this.handleTabChange('matter')}
                        >
                            공지사항
                        </span>
                    </div>
                    <ul>
                        {listToShow.map((item) => (
                            <li
                                key={item.id}
                                className={clickedLiId === item.id ? 'expanded' : ''}
                                onClick={() => this.handleLiClick(item.id)}
                            >
                                <div>
                                    <span>{currentTab === 'Q&A' ? '[Q&A]' : '[공지사항]'}</span>
                                    <span className="faqDate">{item.date}</span>
                                    <span className="faqTitle">{item.title}</span>
                                    <span className="faqViews"><i className="xi-eye-o">{item.views}</i></span>
                                    <i className={`xi-angle-${clickedLiId === item.id ? 'up' : 'down'}`}></i>
                                </div>
                                {clickedLiId === item.id && (
                                    <div className="faqContent">
                                        {item.content}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <Footer />
            </div>
        );
    }
}
