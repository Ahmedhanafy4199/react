import {Component} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import{Route} from "react-router-dom";


class App extends Component{
  render(){
    return <div>
        <h1>App Component</h1>
        <Navbar/>
        <Home/>
        <Footer/>
        <Navbar/>
        <Route exact path="/" component="{Home}"></Route>
        <Route path="/home" component="{Home}"></Route>
        <Route path="about" component="{About}"></Route>
        <Route path="/contact" component="{Contact}"></Route>
        <Footer/>
    </div>
  }
}
export default App