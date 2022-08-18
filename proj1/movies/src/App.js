import { Component } from "react"
import Home from "./components/Home/Home"
import Movies from "./components/Movies/Movies"
import Navbar from "./components/Navbar/Navbar"
import Tv from "./components/Tv/Tv"
import NotFound from "./components/NotFound/NotFound"
import { Route, Routes} from 'react-router-dom';
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
// import ProtectedRoutes from "./components/ProtectedRotes/ProtectedRoutes"

export default class App extends Component{


    render(){
        return (
            <div>
                <Navbar />
                <Routes>
                  <Route path="/home" element={<Home/>}/>
                  
                  {/* <ProtectedRoutes path="/home" element={<Home/>}/> */}
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/movies" element={<Movies/>}/>
                  <Route path="/tv" element={<Tv/>}/>
                  <Route exact path="/" element={<Register/>}/>
                  <Route path="*" element={<NotFound/>}/>
                </Routes>

            </div>
        )
    }
}