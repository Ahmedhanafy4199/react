import { Component } from "react";

export default class Button extends Component{
    render(){
        console.log(this.props.hamada);
        return<>
            <button className="btn btn-danger">Click me</button>
            <button className="btn btn-primary">{this.props.title}</button>
        </>
    }
}