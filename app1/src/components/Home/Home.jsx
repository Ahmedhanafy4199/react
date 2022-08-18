import { Component } from "react";
import img1 from "../../images/2.jpg";
import img2 from "../../images/slideshow-3.jpg";
import img3 from "../../images/7.jpg";
import Button from "../Button/Button";

 export default class Home extends Component{
    //state , setstate
    state={userName:"Ahmed Hanafy"}
    
    changeName= () => {
        this.setState({
            userName:" AboGabal"
        })
    }

    render (){
        return(
            <>
            <div className="text-center p-5">
                <h1>{this.state.userName}</h1>
                <button onClick={this.changeName} className="btn btn-dark">Change Name</button>
            </div>


            {/* props */}
            <Button hamada="my name is ahmed" title="i am changed"/> 
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
            </div>  
            </>
        )
    }
 }