import { Component } from "react"
import axios from "axios";

export default class Register extends Component{

    user ={
        first_name:"",
        last_name:"",
        email:"",
        password:"",
    }
    getFormData=(e)=>{
        this.user[e.target.name]=e.target.value;
        console.log(this.user);
    }
    sendData=async (e)=>{
        e.preventDefault()
        let {data}=await axios.post("https://route-egypt-api.herokuapp.com/signup",this.user)
        if(data.message==="success"){
            e.target.reset() //هتخلي الفورم بتاعت الريجيستر فاضية 
        }
        console.log(data);
    }

    render(){
        return (
            <>
                <div className="w-75 mx-auto my-5">
                    <form onSubmit={this.sendData}>
                        <input onChange={this.getFormData} type="text" name="first_name" placeholder="First Name" className="form-control mt-3"/>
                        <input onChange={this.getFormData} type="text" name="last_name" placeholder="Last Name" className="form-control mt-3"/>
                        <input onChange={this.getFormData} type="email" name="email" placeholder="email" className="form-control mt-3"/>
                        <input onChange={this.getFormData} type="password" name="password" placeholder="password" className="form-control mt-3"/>
                        <button type="submit" className="btn btn-info mt-3 float-right">Register</button>
                    </form>
                </div>
            </>
        )
    }
}