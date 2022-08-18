import { Component } from "react";
import {Routes,Route } from "react-router-dom";

export default class ProtectedRoutes extends Component {
    render(){
        console.log(this.props);
        return(
        
               <>
                   <Routes>
                            <Route path="this.props.path" element={<this.props.element/>} />
                   </Routes>
               </>
           
        )
    }
}