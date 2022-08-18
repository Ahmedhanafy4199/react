import { Component } from "react"

export default class Home extends Component{

    movies=[
        {id:"1" , name:"tom and jerry", desc:"Tom tom and jerry and Jerry" , imgUrl:"https://i.zoomtventertainment.com/story/Gene_Deitch.jpg?tr=w-1200,h-900"},
        {id:"2" , name:"tom and jerry", desc:"Tom and Jerry" , imgUrl:"https://apksshare.com/wp-content/uploads/2021/03/Tom-and-Jerry-Chase-5.3.25-APK-MOD-Download-UNLIMITED-MONEY.png"},
        {id:"3" , name:"tom and jerry", desc:"Tom and Jerry" , imgUrl:"https://i.zoomtventertainment.com/story/Gene_Deitch.jpg?tr=w-1200,h-900"},
        {id:"4" , name:"tom and jerry", desc:"Tom and Jerry" , imgUrl:"https://i.zoomtventertainment.com/story/Gene_Deitch.jpg?tr=w-1200,h-900"},
        {id:"5" , name:"tom and jerry", desc:"Tom and Jerry" , imgUrl:"https://i.zoomtventertainment.com/story/Gene_Deitch.jpg?tr=w-1200,h-900"},
        {id:"6" , name:"tom and jerry", desc:"Tom and Jerry" , imgUrl:"https://i.zoomtventertainment.com/story/Gene_Deitch.jpg?tr=w-1200,h-900"},
        {id:"7" , name:"tom and jerry", desc:"Tom and Jerry" , imgUrl:"https://i.zoomtventertainment.com/story/Gene_Deitch.jpg?tr=w-1200,h-900"},
        {id:"8" , name:"tom and jerry", desc:"Tom and Jerry" , imgUrl:"https://i.zoomtventertainment.com/story/Gene_Deitch.jpg?tr=w-1200,h-900"},
    ]

    state={userName:"Ahmed Hanafy"}
    change =()=>{
        this.setState({
            userName:"Heggo"
        })
    }
    componentDidMount(){
        console.log("this from componentDidMount");
    }
    componentWillUnmount(){
        console.log("this is from componentWillUnmount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    constructor(){
        super()
        console.log("this is from constructor");
    }

    render(){
        console.log("from render");
        
        return (
            <>
                <div>
                    <h2>{this.state.userName}</h2>
                    <button onClick={this.change} className="btn btn-danger d-block">Change me</button>
                </div>

               <div className="container my-5">
                    <div className="row">
                        {this.movies.map((value,index)=>{
                            return(
                                <div key={index} className="col-md-3">
                                    <div className="item">
                                        <img className="w-100" src={value.imgUrl} alt=""/>
                                        <h2>{value.name}</h2>
                                        <p>{value.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
               </div> 
               
            </>
        )
    }
}