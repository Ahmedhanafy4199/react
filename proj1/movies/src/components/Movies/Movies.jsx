import { Component } from "react";
import axios  from "axios";

export default class Movies extends Component{

    state={movies:[], tv:[]}
    getTrending = async(mediaType) =>{
       let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
       console.log(data.results);
       this.setState({
           [mediaType]:data.results
       })
    }
    componentDidMount(){
        this.getTrending('movies')
        this.getTrending('tv')
    }

    render(){
        return (
            <>
               <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="items">
                                <div className="brdr w-25"></div>
                                <h1>Trending <br/> Movies <br/> to watch Now</h1>
                                <b className="secondFontColor  my-5">Most Watched Movies By Days</b>
                                <div className="brdr w-100"></div>
                            </div>
                        </div>
                        {this.state.movies.slice(0,10).map((value,index)=>{
                            return(
                                <div key={index} className="col-md-2">
                                    <div className="items">
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original" +value.poster_path} alt=""/>
                                        <h4 >{value.name} {value.title}</h4>
                                        <span className="vote">{value.vote_average}</span>
                                    </div>
                                </div>
                            )
                        })
                            
                        }
                    </div>
                    <div className="row mx-6">
                        <div className="col-md-4">
                            <div className="items">
                                <div className="brdr w-25"></div>
                                <h1>Trending <br/> Tvs <br/> to watch Now</h1>
                                <b className="secondFontColor  my-5">Most Watched Tvs By Days</b>
                                <div className="brdr w-100"></div>
                            </div>
                        </div>
                        {this.state.tv.slice(0,10).map((value,index)=>{
                            return(
                                <div key={index} className="col-md-2">
                                    <div className="items">
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original" +value.poster_path} alt=""/>
                                        <h4 >{value.name} {value.title}</h4>
                                        <span className="vote">{value.vote_average}</span>
                                    </div>
                                </div>
                            )
                        })
                            
                        }
                    </div>      
                </div>   
            </>
        )
    }
}