import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../js/commonHeaders";
import Footer from "../js/footer";
import scrnnInfrmCS from "../css/scrnnInfrm.scss";

export default class ScrnnInfrm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'nowPlaying', // 기본적으로 '상영중' 탭을 활성화
            screenInfo: [
                { 
                    id: 1, 
                    info: {
                        imgclass: "insideOutImage",
                        boxclass: "insideOutTextBox",
                        movietext: `
                            소개
                            디즈니·픽사의 대표작 <인사이드 아웃> 새로운 감정과 함께 돌아오다! 13살이 된 라일리의 행복을 위해 매일 바쁘게 머릿속 감정 컨트롤 본부를 운영하는 ‘기쁨’, ‘슬픔’, ‘버럭’, ‘까칠’, ‘소심’. 그러던 어느 날, 낯선 감정인 ‘불안’, ‘당황’, ‘따분’, ‘부럽’이가 본부에 등장하고, 언제나 최악의 상황을 대비하며 제멋대로인 ‘불안’이와 기존 감정들은 계속 충돌한다. 결국 새로운 감정들에 의해 본부에서 쫓겨나게 된 기존 감정들은 다시 본부로 돌아가기 위해 위험천만한 모험을 시작하는데… 2024년, 전 세계를 공감으로 물들인 유쾌한 상상이 다시 시작된다!
                        `,
                        movietitle: "인사이드아웃2"
                    }, 
                    className: "insideOut",
                    type: "nowPlaying" // 탭 타입
                },
                { 
                    id: 2,
                    info: {
                        imgclass: "escapeImage",
                        boxclass: "escapeTextBox",
                        movietext: `
                            “내 앞 길 내가 정했습니다” 휴전선 인근 북한 최전방 군부대. 10년 만기 제대를 앞둔 중사 ‘규남’(이제훈)은 미래를 선택할 수 없는 북을 벗어나 원하는 것을 해 볼 수 있는 철책 너머로의 탈주를 준비한다. 그러나, ‘규남’의 계획을 알아챈 하급 병사 ‘동혁’(홍사빈)이 먼저 탈주를 시도하고, 말리려던 ‘규남’까지 졸지에 탈주병으로 체포된다. “허튼 생각 말고 받아들여. 이것이 니 운명이야” 탈주병 조사를 위해 부대로 온 보위부 소좌 ‘현상’(구교환)은 어린 시절 알고 지내던 ‘규남’을 탈주병을 체포한 노력 영웅으로 둔갑시키고 사단장 직속보좌 자리까지 마련해주며 실적을 올리려 한다. 하지만 ‘규남’이 본격적인 탈출을 감행하자 ‘현상’은 물러설 길 없는 추격을 시작한다.
                        `,
                        movietitle: "탈주"
                    }, 
                    className: "escape",
                    type: "nowPlaying" // 탭 타입
                },
                { 
                    id: 3, 
                    info: {
                        imgclass: "piletImage",
                        boxclass: "piletTextBox",
                        movietext: `
                            하루 아침에 인생 추락한 스타 파일럿 제 2의 인생 이륙 준비 중! 최고의 비행 실력을 갖춘 스타 파일럿이자 뜨거운 인기로 유명 TV쇼에도 출연할 만큼 고공행진 하던 한정우(조정석)는 순간의 잘못으로 하루아침에 모든 것을 잃고 실직까지 하게 된다. 블랙 리스트에 오른 그를 다시 받아줄 항공사는 어느 곳도 없었고 궁지에 몰린 한정우는 여동생의 신분으로 완벽히 변신, 마침내 재취업에 성공한다. 그러나 기쁨도 잠시! 또다시 예상치 못한 난관에 부딪히게 되는데… 인생 순항을 꿈꾸던 그의 삶은 무사히 이륙할 수 있을까?
                        `,
                        movietitle: "파일럿"
                    }, 
                    className: "pilet",
                    type: "nowPlaying" // 탭 타입
                }
            ]
        };
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const { activeTab, screenInfo } = this.state;
        // 필터링된 영화 정보
        const filteredInfo = screenInfo.filter(screen => screen.type === activeTab);

        return (
            <div className="scrnnInfrmBk">
                <Header />
                <nav>
                    <h1>영화 안내</h1>
                    <div className="guide">
                        <span
                            className={activeTab === 'nowPlaying' ? 'active' : ''}
                            onClick={() => this.handleTabClick('nowPlaying')}
                        >
                            상영중
                        </span>
                        <span
                            className={activeTab === 'upcoming' ? 'active' : ''}
                            onClick={() => this.handleTabClick('upcoming')}
                        >
                            상영 예정작
                        </span>
                    </div>
                </nav>
                {filteredInfo.length > 0 ? (
                    filteredInfo.map(screen => (
                        <section
                            key={screen.id}
                            className={screen.className}
                        >
                            <div className={screen.info.imgclass} />
                            <div className="textBox">
                                <div className={screen.info.boxclass}>
                                    <h1>{screen.info.movietitle} &nbsp; / &nbsp;가격:20000원</h1>
                                    <p>{screen.info.movietext}</p>
                                </div>
                                <div className="screenBtn">
                                    <Link to="/">예매하러 가기</Link>
                                </div>
                            </div>
                        </section>
                    ))
                ) : (
                    <div className="update-movie">
                        <p>상영 예정인 영화 정보가 없습니다.</p>
                    </div>
                )}
                <Footer/>
            </div>
        );
    }
}
