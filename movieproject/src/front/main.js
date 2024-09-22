import React,{Component} from "react";
import {Link} from "react-router-dom";
import Header from "../front/js/commonHeaders";
import Footer from "../front/js/footer";
import mainCS from "../front/css/main.scss";

export default class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hoveredItems: {}
        };
    }

    handleMouseEnter = (id) => {
        this.setState((prevState) => ({
            hoveredItems: {
                ...prevState.hoveredItems,
                [id]: true,
            }
        }));
    };

    handleMouseLeave = (id) => {
        this.setState((prevState) => ({
            hoveredItems: {
                ...prevState.hoveredItems,
                [id]: false,
            }
        }));
    };

    render(){
        const movieItems = [
            { id:1, text:"상세보기", className:"inside-movie"},
            { id:2, text:"상세보기", className:"escape-movie"},
            { id:3, text:"상세보기", className:"pilet-movie"}
        ]
        const sub_menu = [
            { id:1, text:"자리 배치도", className:"sub_movieMenu" , Link:"thtrIntrd"},
            { id:2, text:"고객센터", className:"sub_movieparking" , Link:"srvcCntr"},
            { id:3, text:"오시는길", className:"sub_movielocation" , Link:"directions"}
        ]
        
        return(
            <div className="mainBk">
                <Header/>
                <nav>
                    <div className="movie-screening">
                        <ul>
                            {movieItems.map((movie_list)=>(
                                <li
                                    key={movie_list.id}//리스트에 구분을위해
                                    onMouseEnter={()=>this.handleMouseEnter(movie_list.id)} 
                                    onMouseLeave={()=>this.handleMouseLeave(movie_list.id)}
                                >
                                    <div className={movie_list.className}>
                                        <div className="film-movie" style={{ display: this.state.hoveredItems[movie_list.id] ? 'flex' : 'none' }}>
                                            <Link to="/scrnnInfrm">{movie_list.text}</Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <nav className="main_sub">
                    <div className="movie-requirements">
                        <ul>
                            {sub_menu.map((menu_list)=>(
                                <li
                                    key={menu_list.id}
                                    className={menu_list.className}
                                >  
                                    <Link to = {menu_list.Link}></Link>
                                    <span>{menu_list.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <Footer/>
            </div>
        );
    }
}
