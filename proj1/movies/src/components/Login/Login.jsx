import { Component } from "react"
import axios from "axios";

export default class Login extends Component{
    state={errMessage:""}
    user ={
        email:"",
        password:"",
    }
    getFormData=(e)=>{
        this.user[e.target.name]=e.target.value;
        console.log(this.user);
    }
    sendData=async (e)=>{
        e.preventDefault()
        let {data}=await axios.post("https://route-egypt-api.herokuapp.com/signin",this.user)
        if(data.message==="success"){
            localStorage.setItem("token",data.token)
            // to home page by routing
            this.props.history.replace("/home")
        }else {
            this.setState({
                errMessage:data.message
            })
        }
        console.log(data);
    }

    render(){
        
        return (
            <>
                <div className="w-75 mx-auto my-5">
                    <form onSubmit={this.sendData}>
                        <input onChange={this.getFormData} type="email" name="email" placeholder="email" className="form-control mt-3"/>
                        <input onChange={this.getFormData} type="password" name="password" placeholder="password" className="form-control mt-3"/>
                        <div className="alert alert-danger ">{this.state.errMessage}</div>
                        <button type="submit" className="btn btn-info mt-3 float-right">Login</button>
                    </form>
                </div>
            </>
        )
    }
}