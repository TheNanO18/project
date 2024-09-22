import React, { Component, createRef } from "react";
import preOrderCs from "../css/preOrder.scss";
import Header from "./commonHeaders";
import Footer from "./footer";

export default class PreOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      movies: [],
      selectedDate: null
    };
    this.dateRefs = Array.from({ length: 31 }, () => createRef());
  }

  componentDidMount() {
    const daysInAugust = Array.from({ length: 31 }, (_, i) => i + 1);
    this.setState({ dates: daysInAugust });
  }

  handleDateClick = async (date, index) => {
    this.setState({ selectedDate: date });

    const fetchedMovies = await this.fetchMoviesForDate(date);
    this.setState({ movies: fetchedMovies });

    // 각 날짜 버튼의 스타일을 설정합니다.
    this.dateRefs.forEach((ref, idx) => {
      if (ref.current) {
        if (idx === index) {
            ref.current.style.backgroundColor = "skyblue"; // 선택된 날짜 스타일 변경
        } else {
            ref.current.style.backgroundColor = "white"; // 다른 날짜 스타일 원복
        }
      }
    });
  };

  fetchMoviesForDate = async (date) => {
    // 예시 데이터 (실제로는 API 호출로 데이터를 가져와야 함)
    const generateRandomTime = () => {
      const hour = Math.floor(Math.random() * 12) + 1; // 1~12시
      const minute = Math.floor(Math.random() * 60);   // 0~59분
      return `${hour}:${minute < 10 ? `0${minute}` : minute} pm`;
    };
    return [
      { title: '탈주', time: generateRandomTime() , img: 'escape'},
      { title: '파일럿', time: generateRandomTime() , img: 'pilet'},
      { title: '인사이드 아웃2',time: generateRandomTime() , img: 'inside' }
    ];
  };

  render() {
    const { dates, movies, selectedDate } = this.state;

    return (
      <div className="movieDate">
        <Header />
        <h1> 상영 시간 안내 </h1>
        <div className="date-movie-container">
          <h2 className="date">날짜 선택</h2>
          <div>
            {dates.map((date, index) => (
              <button
                key={date}
                ref={this.dateRefs[index]}
                onClick={() => this.handleDateClick(date, index)}
              >
                {date}
              </button>
            ))}
          </div>
          {selectedDate && (
            <nav>
              <h2>{selectedDate}일의 영화 목록</h2>
              <ul>
                {movies.map((movie, idx) => (
                  <li key={idx}>
                    <div className = {movie.img}/>
                    <p>
                      {movie.title} - {movie.time}
                    </p>
                  </li>
                ))}
              </ul>
            </nav>                                          
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
